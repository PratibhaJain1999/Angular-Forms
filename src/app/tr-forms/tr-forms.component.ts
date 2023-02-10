import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm} from "@angular/forms";


@Component({
  selector: 'app-tr-forms',
  templateUrl: './tr-forms.component.html',
  styleUrls: ['./tr-forms.component.css']
})
export class TrFormsComponent implements OnInit {
  @ViewChild('form')signForm!:NgForm
  quesAns='';
  genders=['Male','Female']
  employerName={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    gender:'',
    ques:'',
    ask:''

  }
  onFormSubmit=false
  constructor() { }

  ngOnInit(): void {
  
  }
  // onSubmit(){

  //   // console.log(this.signForm);
  // }
 onSubmit(){
  console.log(this.signForm);
  this.onFormSubmit=true;
this.employerName.firstname=this.signForm.value.firstname;
this.employerName.lastname=this.signForm.value.lastname;
this.employerName.email=this.signForm.value.email;
this.employerName.password=this.signForm.value.password;
this.employerName.gender=this.signForm.value.gender;
this.employerName.ques=this.signForm.value.secret;

this.signForm.reset();

};
lastnameSuggestion(){
  this.signForm.setValue({
    firstname:'Champa',
    lastname:'dugar',
    email:'',
    password:'',
    gender:'',
    secret:'',
    ask:''
  })
  // this.signForm.form.patchValue({
  //   lastName:'jain',
  // })
}
}
