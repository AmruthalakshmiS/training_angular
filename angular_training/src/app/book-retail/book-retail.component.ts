import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service1Service } from '../service1.service';
import { BooksummaryService } from '../booksummary.service';

@Component({
  selector: 'app-book-retail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[Service1Service],
  templateUrl: './book-retail.component.html',
  /*template:`Helloworld`, (for smaller application )*/
  styleUrls:['./book-retail.component.scss']
})

export class BookRetailComponent implements OnInit{
  
  public bookRetailDetails: any = [];
  public authorBooks : any = [];
  public summary  : string="";

  @Input('title') title!: string;//same name title as app.component.html@Input(getter)setter(setter name should be same used in html)
  @Input('subtitle') subtitle!: string;

  constructor(public service1: Service1Service,private booksummary:BooksummaryService) {}

  ngOnInit(){
    this.bookRetailDetails =[
      {
        name: "Dan Brown",
        books: ['Ikigai', 'Circe', 'Meluha']
      },
      {
        name: "J.K. Rowling",
        books: ['Harry Potter', 'Fantastic Beasts', 'The Casual Vacancy']
      },
      {
        name: "Agatha Christie",
        books: ['Murder on the Orient Express', 'And Then There Were None', 'The Murder of Roger Ackroyd']
      },
      {
        name: "George Orwell",
        books: ['1984', 'Animal Farm', 'Homage to Catalonia']
      },
     
    ];
  }

  public showBooks(index: number): void {
    const authorBooks = this.bookRetailDetails[index].books;
    this.authorBooks = this.service1.upperCaseBooks(authorBooks)
   
  }

  public showSummary(bookname:string){
    
    this.summary=this.booksummary.Summary(bookname)
    
  }


// public upperCase(inp: Array<string>):void {
//   this.bookRetail[index].books=this.Service1.upperCaseBooks(inp);
//  }
}



   
