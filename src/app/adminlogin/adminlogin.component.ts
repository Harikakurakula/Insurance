import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  data = false;    

  contactForm: any;    

  message!:string;    

  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { }




  ngOnInit(): void {

    this.contactForm = new FormGroup({

      exampleInputEmail1:new FormControl('',Validators.required),

      exampleInputPassword1: new FormControl('', Validators.required)

     

    });

  }

  get exampleInputEmail1() {

    return this.contactForm.get('exampleInputEmail1');

  }

  get exampleInputPassword1() {

    return this.contactForm.get('exampleInputPassword1');

  }

  Onsubmit()

  {

    console.log(this.contactForm.value)

    this.loginService.AdminLogin(this.contactForm.value).subscribe((res)=>{

      console.log();

      this.router.navigateByUrl('viewrequests')

    })    

  }
}