import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
data= false;
Userform:any;
message! : string;
constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { }


  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    Age: new FormControl(''),
    Address:new FormControl(''),
    Emailid:new FormControl('',[Validators.email,Validators.required]),
    Password: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    Mobilenumber: new FormControl('',[Validators.required,Validators.minLength(10)]),
    
  })




  ngOnInit(): void {
    
  }
  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get Address(){
    return this.contactForm.get('Address');
  }
  get Age(){
    return this.contactForm.get('age')
  }
 
  get Emailid() {
    return this.contactForm.get('Emailid');
  }
  get Mobilenumber(){
    return this.contactForm.get('Mobilenumber');
  } 
  get Password() {
    return this.contactForm.get('Password');
  }

  Onsubmit() {

    console.log(this.contactForm.value);

  this.loginService.UserRegister(this.contactForm.value).subscribe((data)=>console.log(data));

    console.log(this.contactForm.value);      

  }
}