import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppLandingRoutingModule } from './landing.routing.module'
import { AppLandingComponent } from './landing.component'


@NgModule
({
  declarations:
  [
    AppLandingComponent
  ],
  imports:
  [
    CommonModule,
    AppLandingRoutingModule
  ]
})
export class AppLandingModule
{
    
}
