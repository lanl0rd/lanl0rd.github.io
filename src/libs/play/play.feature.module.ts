import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlayFeatureRoutingModule } from './play.feature.routing.module'
import { PlayFeature } from './play.feature'

import { CommonRouterElementModule } from '../common/router/router.element.module'

@NgModule
({
  declarations:
  [
    PlayFeature
  ],
  imports:
  [
    CommonModule,
    PlayFeatureRoutingModule,
    CommonRouterElementModule
  ]
})
export class PlayFeatureModule
{
    
}
