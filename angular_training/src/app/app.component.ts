import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Book List';//variable setting
  public selectedBook: string ="";

  public showSelectedBook(selectedBook: string){
    this.selectedBook=selectedBook;
    console.log(this.selectedBook);
  }

}
