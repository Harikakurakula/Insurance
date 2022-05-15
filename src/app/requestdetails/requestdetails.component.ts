import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from '../model/policy';
import { UserService } from '../user.service';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {

  amount !: number;
  policy : Policy=new Policy();

  InsuranceForm=new FormGroup({
    applicationId:new FormControl(''),
    emailid:new FormControl(''),
    policytype:new FormControl(''),
    noofYears:new FormControl(''),
    vehicletype:new FormControl(''),
    vehicleManufacturer:new FormControl(''),
    vehiclemodel:new FormControl(''),
    drivingLicense:new FormControl(''),
    purchaseDate:new FormControl(''),
    registrationNumber:new FormControl(''),
    engineNumber:new FormControl(''),
    chassisNumber:new FormControl(''),
    requestDate:new FormControl(''),
    appstatus:new FormControl(''),
    vehicleprice: new FormControl('')

  })

  
  constructor(private service:UserService,private router:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params['appid']) 

    this.service.getById(this.router.snapshot.params['appid']).subscribe((data)=>
    { console.log(data);
    this.InsuranceForm=new FormGroup({
      applicationId:new FormControl(data["applicationId"]),
      emailid:new FormControl(data["emailid"]),
      policytype:new FormControl(data["policytype"]),
      noofYears:new FormControl(data["noofYears"]),
      vehicletype:new FormControl(data["vehicletype"]),
      vehicleManufacturer:new FormControl(data["vehicleManufacturer"]),
      vehiclemodel:new FormControl(data["vehiclemodel"]),
      drivingLicense:new FormControl(data["drivingLicense"]),
      purchaseDate:new FormControl(data["purchaseDate"]),
      registrationNumber:new FormControl(data["registrationNumber"]),
      engineNumber:new FormControl(data["engineNumber"]),
      chassisNumber:new FormControl(data["chassisNumber"]),
      requestDate:new FormControl(data["requestDate"]),
      appstatus:new FormControl(data["appstatus"]),
      vehicleprice: new FormControl(data["vehicleprice"])

    })
  }
  )
 
  }
    Calculate()
    {
 /*      Calculation

policyamount = price - diprication value 
            
diprication value = for >= 1 year = 10% (price ) 
                    for >= 2 year = 20% (price )
                     for >= 3 year = 30% (price )  */

                   let  duration : number = this.InsuranceForm.value.noofYears;
                   
if( duration >=1 && duration <=3)
{
  this.amount = parseInt(this.InsuranceForm.value.vehicleprice) - 0.1* parseInt(this.InsuranceForm.value.vehicleprice)

}

    }






  submitForm(){
    
      /*  this.service.Adminapprove(this.router.snapshot.params['appid'],this.InsuranceForm.value).subscribe((data)=>
     {
    //    console.log(data); */
        this.policy.Appid =this.InsuranceForm.value.applicationId;
     this.policy.PolicyDate = new Date();
    //   // this.Calculate();
    // console.log(this.amount);
    //   // this.policy.Policyamount = this.amount;
        this.policy.Pstatus = true;
    //    console.log(this.policy) 
       this.service.CreatePolicy(this.policy).subscribe((res) =>
       { console.log(res)
       }); 
      // console.log(data,"Insurance Updated Successfully")      

    //  } 
    // )  

    

    // this.rou.navigateByUrl('') 
  }
}

