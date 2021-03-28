import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'common-router-element',
  templateUrl: './router.element.html',
  styleUrls: ['./router.element.scss']
})
export class CommonRouterElement
{

    @Input() routes
    renderedRoutes: string[] = []

    constructor
    (
        public router: Router,
        public activated: ActivatedRoute
    )
    {

    }

    ngOnInit
    (
    )
    {
        for (let r of this.routes)
        {
            if (typeof r === 'string')
                this.renderedRoutes.push(r)
            else
                this.renderedRoutes.push(r.name)
        }
    }

    route
    (
        a
    )
    {
        if (typeof a === 'string')
            this.router.navigate([a], {relativeTo: this.activated})
        for (let r of this.routes)
            if (r.name === a)
                this.router.navigate([r.path])
    }

}
