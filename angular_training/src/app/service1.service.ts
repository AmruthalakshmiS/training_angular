import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
 })

export class Service1Service {

  constructor() { }

  public upperCaseBooks(books: Array<string>): Array<string>{
    return books.map(book=>book.toUpperCase())
  }
}
