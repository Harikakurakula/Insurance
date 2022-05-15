import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = false;    
  contactForm: any;    
  message!:string;    
 

  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { }
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      Emailid:new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
      
    });
  }
  get  Emailid() {
    return this.contactForm.get(' Emailid');
  }
  get password() {
    return this.contactForm.get('password');
  }
  Onsubmit()
  {
    console.log(this.contactForm.value)
    this.loginService.Login(this.contactForm.value).subscribe((res)=>{
      console.log();
      this.router.navigateByUrl('buyinsurance')
    })    
  }
}
