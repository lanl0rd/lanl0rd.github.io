import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component'
import { AppInitService } from './init/init.service'

import { environment } from '../environments/environment'

import { CommonDynamicElementModule } from '../libs/common/dynamic/dynamic.element.module'

let init = (appInit: AppInitService) => {
   return (): Promise<any> => { return appInit.initialize() }
}

@NgModule
({
  declarations:
  [
    AppComponent
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CommonDynamicElementModule
  ],
  providers:
  [
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      multi: true,
      deps: [AppInitService]
    }
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule
{

}
