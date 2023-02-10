import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders=['Male','Female']
  signInForm!:FormGroup


  constructor() { }

  ngOnInit(): void {
    this.signInForm=new FormGroup({
      'firstname':new FormControl('pratibha',Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'gender': new FormControl('female'),
      'age':new FormControl(null,[Validators.required,Validators.min(8),Validators.max(15)])

    })

  
  }
  onSubmit(){
    console.log(this.signInForm)

  }


}
