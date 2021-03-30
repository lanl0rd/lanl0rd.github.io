import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component
({
  selector: 'common-router-component',
  template: ``
})
export class CommonRouterComponent
{

    constructor
    (
        public activated: ActivatedRoute
    )
    {
        console.log('router component activated', activated)
    }

}
