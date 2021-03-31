import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList, OnInit, OnChanges, AfterViewInit, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'

import { CommonStylesService } from '../styles/styles.service'
import { CommonBrowserService } from '../browser/browser.service'
import { CommonDocumentService } from '../document/document.service'
import { CommonStreamsService } from '../streams/streams.service'

@Component
({
    selector: 'common-button-element', 
    templateUrl: './button.element.html',
    styleUrls: ['./button.element.scss']
})
export class CommonButtonElement implements OnInit, AfterViewInit
{

    @Input() text: string = ''
    @Input() photo: string
    @Input() transparent: boolean = false
    @Input() icon: string
    @Input() scroll: boolean
    @Input() toggleable: boolean
    @Input() toggle: boolean
    @Output() toggleChange = new EventEmitter()
    _color
    @Input() 
    set color(color: string) {
        this._color = color
    }
    _fontColor
    @Input()
    set fontColor(fontColor) {
        if (typeof fontColor === 'string')
            this._fontColor = (fontColor && fontColor.trim() || undefined)
        else if (typeof fontColor === 'function')
            this._fontColor = fontColor
    } 
    @Input() fontColor$
    @Input() fontSize: string = '16px'
    @Input() fontFamily: string
    @Input() size: string
    @Input() colorPhoto = false
    @Input() marquee = false
    @Input() marqueeSpeed
    @Input() backgroundPosition = 'center'
    @Input() backgroundZoom
    @Input() resizeIcon = true
    @Input() spin = false
    @Input() scrollPaddingBottom = '0px'
    @Output() clicked = new EventEmitter()
    @Input() miniButtons: any
    @Input() padding = '8px 8px 8px 8px'
    @Input() borderRadius = '50%'
    @Input() border = 'none'
    @Input() maxWidth = 'fit-content'
    @Input() textAlign = 'center'

    @ViewChild('CommonButtonElement', {static: true}) commonButtonElement
    @ViewChild('buttonPhoto', {static: false}) buttonPhoto
    @ViewChild('buttonI', {static: false}) buttonI
    @ViewChild('buttonText', {static: false}) buttonText
    @ViewChild('buttonScrollText', {static: false}) buttonScrollText

    mouseover = false
    startRect = {left: 0, right: 0, top: 0, bottom: 0}
    touched = false

    listeners = {
        buttonPhoto: false,
        buttonI: false,
        buttonText: false,
        buttonScrollText: false
    }

    constructor
    (
        public styles: CommonStylesService,
        public browser: CommonBrowserService,
        public document: CommonDocumentService,
        public ref: ChangeDetectorRef,
        public streams: CommonStreamsService
    )
    {

    }

    ngOnInit
    (
    )
    {
        if (this.toggle !== undefined && this.toggleable === undefined)
            this.toggleable = true
        if (!this.size)
            this.size = '42px'
        if (this.resizeIcon && this.icon)
        {
            if (this.size.includes('px'))
                this.size = +(this.size.split('px').join('')) * .9425 + 'px'
            else if (this.size.includes('rem'))
                this.size = +(this.size.split('rem').join('')) * .9425 + 'rem'
            else if (this.size.includes('em'))
                this.size = +(this.size.split('em').join('')) * .9425 + 'em'
        }
        if (!this.fontFamily)
            this.fontFamily = this.document.document.documentElement.style.fontFamily
        this.streams.subscribe('buttons', 'detect', $event => { this.ref.detectChanges() })
    }

    ngOnChanges
    (
        changes
    )
    {
        
    }

    ngAfterViewChecked
    (
    )
    {
        if (!this.browser.touch)
            this.setListeners()
    }

    async setListeners
    (
    )
    {
        if (!this.listeners.buttonPhoto && this.buttonPhoto && this.buttonPhoto.nativeElement)
        {
            this.buttonPhoto.nativeElement.addEventListener('touchstart', $event => this.touchstart($event), { passive: true })
            this.buttonPhoto.nativeElement.addEventListener('touchend', $event => this.touch($event), { passive: true })
            this.listeners.buttonPhoto = true
        }
        if (!this.listeners.buttonI && this.buttonI && this.buttonI.nativeElement)
        {
            this.buttonI.nativeElement.addEventListener('touchstart', $event => this.touchstart($event), { passive: true })
            this.buttonI.nativeElement.addEventListener('touchend', $event => this.touch($event), { passive: true })
            this.listeners.buttonI = true
        }
        if (!this.listeners.buttonText && this.buttonText && this.buttonText.nativeElement)
        {
            this.buttonText.nativeElement.addEventListener('touchstart', $event => this.touchstart($event), { passive: true })
            this.buttonText.nativeElement.addEventListener('touchend', $event => this.touch($event), { passive: true })
            this.listeners.buttonText = true
        }
        if (!this.listeners.buttonScrollText && this.buttonScrollText && this.buttonScrollText.nativeElement)
        {
            this.buttonScrollText.nativeElement.addEventListener('touchstart', $event => this.touchstart($event), { passive: true })
            this.buttonScrollText.nativeElement.addEventListener('touchend', $event => this.touch($event), { passive: true })
            this.listeners.buttonScrollText = true
        }
    }

    ngAfterViewInit
    (
    )
    {
        
    }

    click
    (
        $event
    )
    {
        if (!this.touched)
        {
            this.clicked.emit($event)
            this.toggle = !this.toggle
            this.toggleChange.emit(this.toggle)    
        }
    }

    touchstart
    (
        $event
    )
    {
        this.startRect = this.commonButtonElement.nativeElement.getBoundingClientRect()
        this.touched = true
    }

    touch
    (
        $event
    )
    {
        // cant do this to get 100 in audit cant add {passive: true and call this}
        // if ($event.cancelable)
        //     $event.preventDefault()
        // console.log('touch')
        let touch = {x: $event.changedTouches[0].clientX, y: $event.changedTouches[0].clientY}
        if (touch.x > this.startRect.left && touch.x < this.startRect.right && touch.y > this.startRect.top && touch.y < this.startRect.bottom)
        {
            this.clicked.emit($event)
            this.toggle = !this.toggle
            this.toggleChange.emit(this.toggle)
        }
    }

    async setMarqueeSpeed
    (
    )
    {
        if (this.marquee)
        {
            this.marqueeSpeed = this.text.length * .777 + 's'
            this.marqueeSpeed = '4.20s'
        }
    }

    filter
    (
    )
    {
        let color = this._color ? this._color : this.styles.body().color
        if (this.mouseover && !this.touched)
            return 'drop-shadow(0px 0px 2.1px ' + color + ')'
        else if (this.toggle && this.toggleable)
            return 'drop-shadow(0px 0px 4.20px ' + color + ')'
        else
            return 'none'
    }

    fontColour
    (
    )
    {
        if (this._fontColor !== undefined)
            return this._fontColor
        if (this._color && this._color.length > 0)
            return this._color
        return this.styles.body().color
    }

    backgroundColor
    (
    )
    {
        if (!this.transparent)
            return this._color ? this._color : this.styles.getCalculated(this.commonButtonElement.nativeElement).color
    }

    transform
    (
        i: number
    )
    {
        let j = this.miniButtons.length - i
        switch(i)
        {
            case 1:
                return 'translate(-50%, 50%)'
            case 2:
                return 'translate(0%, 85%)'
            case 3:
                return 'translate(50%, 250%)'
            default: return 'translate(-50%, 50%)'
        }
    }
    
}