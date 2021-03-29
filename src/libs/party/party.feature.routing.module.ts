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
