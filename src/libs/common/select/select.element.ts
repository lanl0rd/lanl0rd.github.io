import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component
({
  selector: 'common-select-element',
  templateUrl: './select.element.html',
  styleUrls: ['./select.element.scss']
})
export class CommonSelectElement
{

    @Input() option
    @Output() optionChange = new EventEmitter()
    @Input() options
    @Output() clicked = new EventEmitter<any>()

    ngOnChanges(changes)
    {
        if (!(this.option in this.options))
            this.option = null
    }

}
