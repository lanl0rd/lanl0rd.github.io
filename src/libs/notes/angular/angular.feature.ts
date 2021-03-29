import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'notes-angular-feature',
  templateUrl: './angular.feature.html',
  styleUrls: ['./angular.feature.scss']
})
export class NotesAngularFeature
{

    txts: string[] = ['app-init', 'changeDetector', 'cheat-sheet', 'dynamic-progress', 'elements', 'environment', 'image-lazy', 'lazy-loading-ivy', 'lazy-loading', 'lazy', 'scrolling-routing', 'xsrf']
    txt: string = 'app-init'
    txtContent$

    constructor
    (
        public http: HttpClient
    )
    {

    }

    async ngOnInit
    (
    )
    {
        this.loadTxt()
    }

    async ngOnDestroy
    (
    )
    {
        if (this.txtContent$)
            this.txtContent$.destroy()
    }

    async loadTxt
    (
    )
    {
        this.txtContent$ = this.http.get('assets/notes/angular/' + this.txt + '.txt', {responseType: 'text'})
    }

}
