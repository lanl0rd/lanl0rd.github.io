import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PartyStripeElement } from './stripe.element'

const routes: Routes = [
    {
        path: '',
        component: PartyStripeElement
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
export class PartyStripeElementRoutingModule
{

}
