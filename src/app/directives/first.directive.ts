import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    'selector':'[firstDirective]'
})
    
export class FirstDirective implements OnInit{
    constructor(private elementRef: ElementRef) { }
    
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor= 'green'
    }
}