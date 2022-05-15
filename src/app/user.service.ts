import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, Subject } from 'rxjs';  
import { InsuranceApplication } from './model/insurance-application';
import { AdminTable } from './model/admin-table';
import { Register } from './model/register';
import { Policy } from './model/policy';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public subject=new Subject<boolean>();

  Url :string;  

  token : string | undefined;  

  header : any;  

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',  

    })}

  constructor(private http : HttpClient) {

    this.Url='http://localhost:27764/api/user';

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  

   

    const headerSettings: {[name: string]: string | string[]; } = {};  

    this.header = new HttpHeaders(headerSettings);  

   }
   recievedStatus():Observable<boolean>

   {
 
     return this.subject.asObservable();
 
   }
 
   Login(model : any){        
 
     return this.http.post<any>(this.Url+'/UserLogin',JSON.stringify(model),this.httpOptions );  
 

   } 
   
   AdminLogin(model : AdminTable){        
 
    return this.http.post<AdminTable>(this.Url+'/AdminLogin',JSON.stringify(model),this.httpOptions );  

  }  

   UserRegister(register:Register)  

  {      

   return this.http.post<Register>(this.Url +'/Reg', JSON.stringify (register), this.httpOptions)  

  }

  GetAll():Observable<InsuranceApplication[]>
  {
    return this.http.get<InsuranceApplication[]>(this.Url);
  }
 
 
  getById(id:number): Observable<InsuranceApplication> {
    return this.http.get<InsuranceApplication>(this.Url+'/'+ id)

  }
  
  BuyPlan(model : InsuranceApplication){        
 
    return this.http.post<InsuranceApplication>(this.Url+'/Buypolicy',JSON.stringify(model),this.httpOptions );  

  } 

  Adminapprove(id: number, model : InsuranceApplication){        
 
    return this.http.put<InsuranceApplication>(this.Url+'/Approval/'+id,JSON.stringify(model),this.httpOptions );  

  } 

  CreatePolicy(model : Policy){        
 
    return this.http.post<Policy>(this.Url+'/Policy',JSON.stringify(model),this.httpOptions );  

  } 

}
