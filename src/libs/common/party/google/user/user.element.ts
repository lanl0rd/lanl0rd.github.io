import { Component, ChangeDetectorRef } from '@angular/core'

import { CommonPartyGoogleUserService } from './user.service'

import { CommonStreamsService } from '../../../streams/streams.service'

@Component
({
    selector: 'common-party-google-user-element',
    templateUrl: './user.element.html',
    styleUrls: ['./user.element.scss']
})
export class CommonPartyGoogleUserElement
{

    toggled = false
    verifyRes

    signedIn$
    userChanged$
    
    constructor
    (
        public srv: CommonPartyGoogleUserService,
        public streams: CommonStreamsService,
        public cd: ChangeDetectorRef
    )
    {

    }

    ngOnInit
    (
    )
    {
        this.signedIn$ = this.streams.subscribe('CommonGoogleUser', 'isSignedIn', $event => this.cd.detectChanges())
        this.userChanged$ = this.streams.subscribe('CommonGoogleUser', 'userChanged', $event => { /* console.log('user changed', $event);*/ this.cd.detectChanges(); })
    }

    ngOnDestroy
    (
    )
    {
        this.signedIn$.unsubscribe()
        this.userChanged$.unsubscribe()
    }

    async verify
    (
    )
    {
        this.verifyRes = await this.srv.verify()
    }

}