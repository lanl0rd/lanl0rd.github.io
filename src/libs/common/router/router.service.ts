import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { CommonJsonService } from '../json/json.service'

@Injectable({ providedIn: 'root' })
export class CommonRouterService
{

    _routes
    _renderedRoutes: string[] = []
    activated

    constructor
    (
        public router: Router,
        public json: CommonJsonService
    )
    {
        router.events.subscribe($event => {
            switch ($event.constructor.name)
            {
                case 'NavigationEnd':
                {
                    let routes = this.json.pathToValue(this.activated, 'snapshot.data.data.CommonRouterService.routes')
                    this.routes(routes ? routes : [])
                    break
                }
            }
        })
    }

    routes
    (
        routes
    )
    {
        let newRenderedRoutes = []
        for (let r of routes)
        {
            if (typeof r === 'string')
                newRenderedRoutes.push(r)
            else
                newRenderedRoutes.push(r.name)
        }
        this._routes = routes
        this._renderedRoutes = newRenderedRoutes
    }

    route
    (
        a
    )
    {
        if (typeof a === 'string')
            this.router.navigate([a], {relativeTo: this.activated})
        for (let r of this._routes)
            if (r.name === a)
                this.router.navigate([r.path])
    }

}