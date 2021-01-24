import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private fb:FormBuilder, private http:HttpClient,private cookieService:CookieService) { }
  readonly BaseURI='http://localhost:51373/api';

  getAdmission(){
    return this.http.get(this.BaseURI+'/Admission/GetInfoAdmission');
  }

}
