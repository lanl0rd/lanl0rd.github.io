import { Component } from '@angular/core'

import { CommonRouterService } from '../libs/common/router/router.service'

@Component
({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{

    init: any = {}

    async ngOnInit
    (
    )
    {
        this.init = {
            module: (await import('./init/init.element.module')).AppInitElementModule,
            component: (await import('./init/init.element')).AppInitElement
        }
    }

}
