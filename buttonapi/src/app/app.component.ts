import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buttonapi';
  http = inject(HttpClient);
  

  trueSubmit(){
    this.http.get('https://jsonplaceholder.org/comments').subscribe((res) => {
      console.log(res)
      
    })
    

  }

  falseSubmit(){
    this.http.get('https://jsonplaceholder.org/commentsa').subscribe((res) => {
      console.log(res)
      
    })

  }
}
