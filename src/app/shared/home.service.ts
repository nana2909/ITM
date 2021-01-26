import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private fb:FormBuilder, private http:HttpClient,private cookieService:CookieService) { }
  readonly BaseURI='http://localhost:51373/api/Home';

  getAdmission(){
    return this.http.get(this.BaseURI+'/Admission/GetInfoAdmission');
  }


  //Event
  getEvents(){
    return this.http.get(this.BaseURI + "/GetAllEvents");
  }

  getEventById(id :string){
    return this.http.get(this.BaseURI + "/GetEventById/" + id);
  }

  // Department
  getAllDepartments(){
    return this.http.get(this.BaseURI + "/GetAllDepartment");
  }

  getDepartmentById(id: string){
    return this.http.get(this.BaseURI + "/GetDepartmentById/"+ id);
  }

  // Stream
  getAllStream(){
    return this.http.get(this.BaseURI + "/GetAllStream");
  }

  // Field
  getAllField(){
    return this.http.get(this.BaseURI + "/GetAllField");
  }

  // Course
  getAllCourse(){
    return this.http.get(this.BaseURI + "/GetAllCourse");
  }

  // Option Subject
  getAllOpSubject(){
    return this.http.get(this.BaseURI + "/GetAllOpSubject");
  }

  //Specical Subject
  getAllSpecSubject(){
    return this.http.get(this.BaseURI + "/GetAllSpecSubject");
  }

}

export interface Stream{
  StreamCode : string;
  Name : string
}

export interface Field{
  FieldCode : string;
  Name : string
}

export interface Course{
  CourseCode : string;
  CoureseName : string;
  Description: string;
  StreamCode: string;
  FieldCode: string;
  isNew : boolean;
  imgUrl: string;
}

export interface OptionSubject{
    SubjectID: string;
    SubjectName: string;
}
