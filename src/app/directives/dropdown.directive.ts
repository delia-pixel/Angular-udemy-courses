import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.dropdown-toggle')
  isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

 /* closing the dropdown from anywhere on the page
 elRel in the constructor
   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  } */
  constructor() {}
}
