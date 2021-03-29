import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartyFeatureRoutingModule } from './party.feature.routing.module'
import { PartyFeature } from './party.feature'

import { CommonRouterElementModule } from '../common/router/router.element.module'

@NgModule
({
  declarations:
  [
    PartyFeature
  ],
  imports:
  [
    CommonModule,
    PartyFeatureRoutingModule,
    CommonRouterElementModule
  ]
})
export class PartyFeatureModule
{
    
}
