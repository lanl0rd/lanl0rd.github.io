import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PreloadAllModules } from '@angular/router'

import { CommonDynamicArtifactModule } from '../libs/common/dynamic/dynamic.artifact.module'
import { CommonDynamicArtifact } from '../libs/common/dynamic/dynamic.artifact'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CommonDynamicArtifact,
        data:
        {
            component: async () => (await import('./landing/landing.feature')).AppLandingFeature,
            module: async () => (await import('./landing/landing.feature.module')).AppLandingFeatureModule,
            data: {
                CommonRouterService: {
                    routes: ['tools', 'party', 'play', 'notes', 'about']
                }
            }
        }
    },
    {
        path: 'notes',
        pathMatch: 'full',
        component: CommonDynamicArtifact,
        data:
        {
            component: async () => (await import('../libs/notes/notes.component')).NotesComponent,
            module: async () => (await import('../libs/notes/notes.module')).NotesModule,
            data: {
                CommonRouterService: {
                    routes: [{'name': '..', 'path': './'}, 'angular']
                }
            }
        },
        children: [
            
        ]
    },
    {
        component: CommonDynamicArtifact,
        path: 'notes/angular',
        data: {
            component: async () => (await import('../libs/notes/angular/angular.feature')).NotesAngularFeature,
            module: async () => (await import('../libs/notes/angular/angular.feature.module')).NotesAngularFeatureModule,
            data: {
                CommonRouterService: {
                    routes: [{'name': '..', 'path': '../notes'}]
                }
            }
        }
    },
    {
        path: 'tools',
        component: CommonDynamicArtifact,
        data:
        {
            component: async () => (await import('../libs/tools/tools.feature')).ToolsFeature,
            module: async () => (await import('../libs/tools/tools.feature.module')).ToolsFeatureModule,
            data: {
                CommonRouterService: {
                    routes: [{'name': '..', 'path': '../'}]
                }
            }
        }
    },
    {
        path: 'party',
        component: CommonDynamicArtifact,
        data:
        {
            component: async () => (await import('../libs/party/party.feature')).PartyFeature,
            module: async () => (await import('../libs/party/party.feature.module')).PartyFeatureModule,
            data: {
                CommonRouterService: {
                    routes: [{'name': '..', 'path': './'}, 'paypal', 'google', 'twilio', 'stripe']
                }
            }
        },
        children: [
            {
                path: 'paypal',
                component: CommonDynamicArtifact,
                data:
                {
                    component: async () => (await import('../libs/party/paypal/paypal.element')).PartyPaypalElement,
                    module: async () => (await import('../libs/party/paypal/paypal.element.module')).PartyPaypalElementModule,
                    data: {
                        CommonRouterService: {
                            routes: [{'name': '..', 'path': '../'}]
                        }
                    }
                }
            },
            {
                path: 'google',
                component: CommonDynamicArtifact,
                data:
                {
                    component: async () => (await import('../libs/party/google/google.artifact')).PartyGoogleArtifact,
                    module: async () => (await import('../libs/party/google/google.artifact.module')).PartyGoogleArtifactModule,
                    data: {
                        CommonRouterService: {
                            routes: [{'name': '..', 'path': '../'}]
                        }
                    }
                }
            },
            {
                path: 'stripe',
                component: CommonDynamicArtifact,
                data:
                {
                    component: async () => (await import('../libs/party/stripe/stripe.element')).PartyStripeElement,
                    module: async () => (await import('../libs/party/stripe/stripe.element.module')).PartyStripeElementModule,
                    data: {
                        CommonRouterService: {
                            routes: [{'name': '..', 'path': '../'}]
                        }
                    }
                }
            },
            {
                path: 'twilio',
                component: CommonDynamicArtifact,
                data:
                {
                    component: async () => (await import('../libs/party/twilio/twilio.element')).PartyTwilioElement,
                    module: async () => (await import('../libs/party/twilio/twilio.element.module')).PartyTwilioElementModule,
                    data: {
                        CommonRouterService: {
                            routes: [{'name': '..', 'path': '../'}]
                        }
                    }
                }
            }
        ]
    },
    {
        path: 'play',
        component: CommonDynamicArtifact,
        data:
        {
            component: async () => (await import('../libs/play/play.feature')).PlayFeature,
            module: async () => (await import('../libs/play/play.feature.module')).PlayFeatureModule,
            data: {
                CommonRouterService: {
                    routes: [{'name': '..', 'path': './'}]
                }
            }
        }
    },
    {
        path: 'about',
        component: CommonDynamicArtifact,
        data:
        {
            component: async () => (await import('../libs/about/about.feature')).AboutFeature,
            module: async () => (await import('../libs/about/about.feature.module')).AboutFeatureModule,
            data: {
                CommonRouterService: {
                    routes: [{'name': '..', 'path': './'}]
                }
            }
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule
({
  imports:
  [
    RouterModule.forRoot
    (
        routes,
        {
            useHash: true,
            // preloadingStrategy: PreloadAllModules
        }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule
{

}
