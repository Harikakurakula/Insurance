import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { InsuranceApplication } from '../model/insurance-application';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {

  InsuranceStatus ! : InsuranceApplication[];

  constructor(public productservice:UserService)

  {

    productservice.GetAll().subscribe((data)=>{

      this.InsuranceStatus=data;

      console.log(data);

    });

   }

  ngOnInit(): void {
  }

}
