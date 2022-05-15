import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { EstimateInsurancecalComponent } from './estimate-insurancecal/estimate-insurancecal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { FaqComponent } from './faq/faq.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { RegisterComponent } from './register/register.component';
import { PolicyComponent } from './policy/policy.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyInsuranceComponent,
    RenewInsuranceComponent,
    ClaimInsuranceComponent,
    EstimateInsurancecalComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    HelpComponent,
    FaqComponent,
   RegisterComponent,
    AdminloginComponent,
    MenuComponent,
    AdminloginComponent,
    ViewrequestsComponent,
    RequestdetailsComponent,
    PolicyComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
   HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
