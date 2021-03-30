import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppRoutingModule } from './app.routing.module'
import { App } from './app'
import { AppInitService } from './init/init.service'

import { environment } from '../environments/environment'

import { CommonDynamicElementModule } from '../libs/common/dynamic/dynamic.element.module'

@NgModule
({
  declarations:
  [
    App
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CommonDynamicElementModule
  ],
  providers:
  [
    {
      provide: APP_INITIALIZER,
      useFactory: (appInit: AppInitService) => {
        return (): Promise<any> => { return appInit.initialize() }
      },
      multi: true,
      deps: [AppInitService]
    }
  ],
  bootstrap:
  [
    App
  ]
})
export class AppModule
{

}
