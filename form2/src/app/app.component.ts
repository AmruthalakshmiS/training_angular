import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onSubmit() {
  this.simpleForm.get('name')?.valueChanges.subscribe(data => console.log(data))
// throw new Error('Method not implemented.');
 }
  title = 'form2';
  simpleForm = new FormGroup({
    name: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
});
}
