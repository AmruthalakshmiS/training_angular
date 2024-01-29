import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector :'[numbersOnly]'
})

export class NumbersOnlyDirective{
    constructor (private eleref: ElementRef){}

    @HostListener('input', ['$event']) onInputChange(event: Event){
        const initialInputValue : string = this.eleref.nativeElement.value;
        this.eleref.nativeElement.value = initialInputValue.replace(/[^0-9]*/g, '');

        if (initialInputValue !== this.eleref.nativeElement.value){
            event.stopPropagation();
        }
    }
}