import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[backgroundBlue]',
  standalone: true
})
export class BookProductsDirective {

  constructor(public eleRef: ElementRef) { 
    this.eleRef.nativeElement.style.background = "aqua";
  }

}
