import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-products',
  // standalone: true,
  // imports: [],
  templateUrl: './book-products.component.html',
  styleUrl: './book-products.component.scss'
})
export class BookProductsComponent {
   public bookReview: string = 'Welcome to the mystical word'
   public activated = false;
   @Input ("selectedBook") selectedBook!: string;
   public toggleActivation(){
    this.activated = !this.activated;
  }
  
  }



