import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppLandingFeature } from './landing.feature'

const routes: Routes = [
    {
        path: '',
        component: AppLandingFeature,
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
export class AppLandingFeatureRoutingModule
{

}
