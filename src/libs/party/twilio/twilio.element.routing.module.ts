import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PartyTwilioElement } from './twilio.element'

const routes: Routes = [
    {
        path: '',
        component: PartyTwilioElement
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
export class PartyTwilioElementRoutingModule
{

}
