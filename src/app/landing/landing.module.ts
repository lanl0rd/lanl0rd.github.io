import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppLandingRoutingModule } from './landing.routing.module'
import { AppLandingComponent } from './landing.component'

import { CommonRouterElementModule } from '../../libs/common/router/router.element.module'

@NgModule
({
  declarations:
  [
    AppLandingComponent
  ],
  imports:
  [
    CommonModule,
    AppLandingRoutingModule,
    CommonRouterElementModule
  ]
})
export class AppLandingModule
{
    
}
