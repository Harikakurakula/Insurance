import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  data = false;    

  contactForm: any;    

  message!:string;    

  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { }

 
  ngOnInit(): void {

    this.contactForm = new FormGroup({
      Emailid:new FormControl('',[Validators.required]),
      VehicleManufacturer: new FormControl('',[Validators.required,]),
      Vehiclemodel: new FormControl('',[Validators.required,]),
      DrivingLicense: new FormControl('',[Validators.required,]),
      PurchaseDate: new FormControl('',[Validators.required,]),
      RegistrationNumber: new FormControl('',[Validators.required,]),
      EngineNumber: new FormControl('',[Validators.required,]),
      chassisNumber: new FormControl('',[Validators.required,]),
      card:new FormControl('',[Validators.required]),
      cardnumber:new FormControl('',[Validators.required,Validators.minLength(16)]),
      expiry:new FormControl('',[Validators.required]),
      cvv:new FormControl('',[Validators.required,Validators.minLength(3)]),
      vehicleprice: new FormControl('',[Validators.required])
  
      })
  }

  get Emailid() {
    return this.contactForm.get('Emailid');
  }

  get VehicleManufacturer() {
    return this.contactForm.get('VehicleManufacturer');
  }
  get Vehiclemodel() {
    return this.contactForm.get('Vehiclemodel');
  }
  get DrivingLicense() {
    return this.contactForm.get('DrivingLicense');
  }
  get PurchaseDate() {
    return this.contactForm.get('PurchaseDate');
  }
  get RegistrationNumber() {
    return this.contactForm.get('RegistrationNumber');
  }
  get  EngineNumber() {
    return this.contactForm.get('EngineNumber');
  }
  get chassisNumber() {
    return this.contactForm.get('chassisNumber');
  }
  get card() {
    return this.contactForm.get('card');
  }
  get cardnumber() {
    return this.contactForm.get('cardnumber');
  }
  get expiry() {
    return this.contactForm.get('expiry');
  }
  get cvv() {
    return this.contactForm.get('cvv');
  }

  get vehicleprice() {
    return this.contactForm.get('vehicleprice');
  }
  onSubmit() {

    console.log(this.contactForm.value); 
    
             this.loginService.BuyPlan(this.contactForm.value).subscribe((res)=>{

      console.log(res);

      

    })  
  }

}
