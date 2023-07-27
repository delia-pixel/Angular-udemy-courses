import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @Input('defaultColor') defaultColor: string = '#505AE9';
  @Input() hoverColor: string = 'white';

  @HostBinding('style.color') color: string = this.defaultColor;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   '#505AE9'
    // );
    this.color = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.color = this.hoverColor;
  }

  @HostListener('mouseleave')
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   '#505AE9'
    // );
    this.color = this.defaultColor;
  }
}
