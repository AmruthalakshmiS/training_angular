import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  CommonModule,
ReactiveFormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'reactive-form';
  public submitted:boolean=false;
  
  ngOnInit(): void {
    this.addHobby()
    this.userForm.valueChanges.subscribe( ()=>console.log(this.userForm.invalid))
    this.userForm.markAsPristine()
  }

  public userForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    lastName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    middleName: new FormControl('',[Validators.maxLength(20)]),
    age: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.max(50),Validators.min(10)]),
    gender: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      landmark: new FormControl('',[Validators.maxLength(20)]),
      city: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      state: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      zipCode: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9]*$")]),
      country: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    }),
    hobbies: new FormArray([])
  })

  
  addHobby() {
    const hobbiesFormArray = this.userForm.get('hobbies') as FormArray;
    hobbiesFormArray.push(new FormControl(''));
  }
  
  submit(){
    this.submitted=true;
  }

}

