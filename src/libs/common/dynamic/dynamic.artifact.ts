import { Component, Input, ViewChild, ComponentFactoryResolver, NgModuleFactory, Injector, Compiler } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component
({
    selector: 'common-dynamic-artifact',
    template:
    `
        <common-dynamic-element
        *ngIf="route && route.loaded"
        [component]="route.component"
        [module]="route.module"
        [data]="route.data"
        ></common-dynamic-element>
    `
})
export class CommonDynamicArtifact
{

    selected = -1
    route

    navigation$

    constructor
    (
        public activated: ActivatedRoute,
        public router: CommonRouterService,
        public streams: CommonStreamsService
    )
    {

    }

    ngOnInit
    (
    )
    {
        this.selectRoute()
    }

    ngOnChanges
    (
        changes
    )
    {
        console.log('changes', changes)
    }

    ngOnDestroy
    (
    )
    {

    }

    async selectRoute
    (
    )
    {
        this.route = this.activated.snapshot.data
        if (this.route.module && this.route.component)
        {
            this.route.module = await this.route.module()
            this.route.component = await this.route.component()
            this.route.loaded = true
        }
    }

}