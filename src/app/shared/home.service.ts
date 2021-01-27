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
  readonly BaseURI2='http://localhost:51373/api/';
  GetInfoAdmission(id:string){
    return this.http.get('http://localhost:51373/api/Admission/GetInfoAdmission/'+ id);
  }

  GetAdmissionForm(){
    return this.http.get(this.BaseURI + '/DownloadForm',{  
      responseType: 'blob'  
  });
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
  getListDepartments(){
    return this.http.get(this.BaseURI2+'/Department/GetListDepartments');
  }

  getDepartmentById(id: string){
    return this.http.get(this.BaseURI + "/GetDepartmentById/"+ id);
  }
  
  //Faculty
  getListFaculties(){
    return this.http.get(this.BaseURI2+'/Department/GetListFaculties');
  }

  //Facilities
  getListFacilities(){
    return this.http.get(this.BaseURI2+'/Department/GetListFacilities');
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

export interface AdmissionKey{
  AdmissionKey: string;
}

export interface Stream{
  StreamCode : string;
  Name : string
}

export interface Field{
  FieldCode : string;
  Name : string;
  streamCode: string;
}

export interface Course{
  coureseName : string;
  courseCode : string;
  description: string;
  streamCode: string;
  fieldCode: string;
  isNew : boolean;
  imgUrl: string;
}

export interface SpecSubject{
    subjectID: string;
    subjectName: string;
    fieldCode:string;
    // tbAdmissions: [];
    // tbField: [];
}

export interface OptionalSubject{
  subjectID: string;
  subjectName: string;
  tbAdmissions: [];
}
