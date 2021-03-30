import { Injectable, ComponentFactoryResolver } from '@angular/core'
import { Router } from '@angular/router'

import { CommonJsonService } from '../json/json.service'

@Injectable({ providedIn: 'root' })
export class CommonRouterService
{

    _routes
    _renderedRoutes: string[] = []
    // activated

    activations = []

    constructor
    (
        public router: Router,
        public json: CommonJsonService,
        public resolver: ComponentFactoryResolver
    )
    {
        router.events.subscribe($event => {
            switch ($event.constructor.name)
            {
                case 'ActivationEnd':
                {
                    let routes = this.json.pathToValue($event, 'snapshot.routeConfig.data.data.CommonRouterService.routes')
                    this.activations.push(routes)
                    break
                }
                case 'NavigationEnd':
                {
                    this.routes(this.activations[0])
                    this.activations = []
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
            this.router.navigate([this.router.url + '/' + a], {
                // relativeTo: this.activated
            })
        for (let r of this._routes)
            if (r.name === a)
                this.router.navigate([r.path])
    }

}