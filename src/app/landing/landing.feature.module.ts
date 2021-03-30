import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import { AppLandingFeatureRoutingModule } from './landing.feature.routing.module'
import { AppLandingFeature } from './landing.feature'

// import { CommonRouterElementModule } from '../../libs/common/router/router.element.module'

@NgModule
({
  declarations:
  [
    AppLandingFeature
  ],
  imports:
  [
    CommonModule,
    // AppLandingFeatureRoutingModule,
    // CommonRouterElementModule
  ]
})
export class AppLandingFeatureModule
{
    
}
