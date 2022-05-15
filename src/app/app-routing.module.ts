import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { EstimateInsurancecalComponent } from './estimate-insurancecal/estimate-insurancecal.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'buyinsurance',component:BuyInsuranceComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'claiminsurance',component:ClaimInsuranceComponent},
  {path:'renewinsurance',component:RenewInsuranceComponent},
  {path:'estimateinsurancecal',component:EstimateInsurancecalComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'help',component:HelpComponent},
  {path:'faq',component:FaqComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'viewrequests',component:ViewrequestsComponent},
{path :'requestdetails/:appid',component:RequestdetailsComponent}

];

@NgModule({

  declarations:[


    
  ],



  imports: [
    
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
