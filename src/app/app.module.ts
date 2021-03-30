import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component'

import { environment } from '../environments/environment'

import { CommonDynamicElementModule } from '../libs/common/dynamic/dynamic.element.module'

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
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule
{

}
