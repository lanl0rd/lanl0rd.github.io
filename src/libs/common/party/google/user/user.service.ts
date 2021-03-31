import { Injectable, Inject, ApplicationRef } from '@angular/core'

import { CommonDocumentService } from '../../../document/document.service'
import { CommonStreamsService } from '../../../streams/streams.service'
import { CommonHttpService } from '../../../http/http.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonPartyGoogleUserService
{

    initialized = false
    signedIn = false

    auth2
    googleUser
    basicProfile

    constructor
    (
        public document: CommonDocumentService,
        public streams: CommonStreamsService,
        public http: CommonHttpService,
        @Inject('COMMON_GOOGLE_USER') public options: any
    )
    {
        this.initGoogle()
    }

    async initGoogle
    (
    )
    {
        this.document.meta.addTag
            ({
                name: 'google-signin-client_id',
                content: this.options.clientId
            })
        await this.document.loadScript
            (
                this.options.script,
                'google-signin-script'
            )

        window['gapi'].load
        (
            'auth2',
            () =>
            {
                window['gapi'].auth2.init()
                this.auth2 = window['gapi'].auth2.getAuthInstance()

                this.auth2.currentUser.listen(userChanged => {
                    this.streams.dispatch('CommonGoogleUser', 'userChanged', userChanged, {keepAlive: true})
                })

                this.auth2.isSignedIn.listen($event => {
                    this.signedIn = $event
                    if ($event)
                        this.signInHandler(this.auth2.currentUser.get())
                    this.streams.dispatch('CommonGoogleUser', 'isSignedIn', $event, {keepAlive: true})
                })

                if (this.auth2.isSignedIn.get())
                    this.auth2.signIn()

                this.initialized = true
            }
        )
    }

    async signInHandler
    (
        googleUser
    )
    {
        this.googleUser = googleUser
        let profile = googleUser.getBasicProfile()
        this.basicProfile = {
            id: profile.getId(),
            name: profile.getName(),
            givenName: profile.getGivenName(),
            familyName: profile.getFamilyName(),
            imageUrl: profile.getImageUrl(),
            email: profile.getEmail(),
            idToken: googleUser.getAuthResponse().id_token
        }
    }

    signOut
    (
    )
    {
        this.auth2.signOut()
        this.googleUser = undefined
    }

    async verify
    (
    )
    {
        return await this.http.put(this.options.verifyEndpoint, {token: this.basicProfile.idToken})
    }

}