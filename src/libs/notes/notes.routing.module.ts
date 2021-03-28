import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { NotesComponent } from './notes.component'

const routes: Routes = [
    {
        path: '',
        component: NotesComponent,
        pathMatch: 'full'
    },
    {
        path: 'angular',
        loadChildren: async () => (await import('./angular/angular.module')).NotesAngularModule
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
export class NotesRoutingModule
{

}
