import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    } wrongEmail:boolean=false;
    submitForm(EmailGiven:HTMLInputElement):void{
    this.wrongEmail=false;
    if(EmailGiven.value=="admin@123"){
    alert('Logged in successfully !!! hurreyyyyyyyy');
    }
    else{
    this.wrongEmail=true;
    }
    }
    changePassword(newPassword:HTMLInputElement,reNewPassword:HTMLInputElement):void{
    if(newPassword.value==reNewPassword.value){
    alert('Password has been reset successfully !!!')
    this.wrongEmail=true;
    }
    else{
    alert('Input fileds mismatched');
    }
    }
    
    
    
    }


