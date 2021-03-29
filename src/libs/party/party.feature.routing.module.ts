import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PartyFeature } from './party.feature'

const routes: Routes = [
    {
        path: '',
        component: PartyFeature,
        pathMatch: 'full'
    },
    {
        path: 'paypal',
        loadChildren: async () => (await import('./paypal/paypal.element.module')).PartyPaypalElementModule
    },
    {
        path: 'google',
        loadChildren: async () => (await import('./google/google.artifact.module')).PartyGoogleArtifactModule
    },
    {
      path: 'stripe',
      loadChildren: async () => (await import('./stripe/stripe.element.module')).PartyStripeElementModule
    },
    {
        path: 'twilio',
        loadChildren: async () => (await import('./twilio/twilio.element.module')).PartyTwilioElementModule
    }
]

@NgModule
({
  imports:
  [
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class PartyFeatureRoutingModule
{

}
