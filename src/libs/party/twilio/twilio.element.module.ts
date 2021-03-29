import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartyTwilioElementRoutingModule } from './twilio.element.routing.module'
import { PartyTwilioElement } from './twilio.element'

import { CommonRouterElementModule } from '../../common/router/router.element.module'


@NgModule
({
  declarations:
  [
    PartyTwilioElement
  ],
  imports:
  [
    CommonModule,
    PartyTwilioElementRoutingModule,
    CommonRouterElementModule
  ]
})
export class PartyTwilioElementModule
{

}
