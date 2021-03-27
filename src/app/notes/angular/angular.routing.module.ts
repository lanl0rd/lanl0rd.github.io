import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotesAngularComponent } from './angular.component'

const routes: Routes = [
    {
        path: '',
        component: NotesAngularComponent
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
export class NotesAngularRoutingModule
{

}
