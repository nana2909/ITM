import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI='http://localhost:51373/api';
 
  //admission
 ConfirmAdmission(formData){
  console.log(formData);
  return this.http.post(this.BaseURI + "/Admission/ConfirmlAdmission", formData);
}

GetAllAdmission(){
  return this.http.get(this.BaseURI + "/Admission/GetAllAdmissions");
}
 //contactUs

 //courses

 //department

 //facilities

 //faculty
 facultyForm=this.fb.group({
  FacultyID : '',
  Name:[null,Validators.required],
  DoB: [null,Validators.required],
  Degree:[null,Validators.required],
  DepartmentID:[null,Validators.required],
  ImgUrl:''
  });
 
 getFacultyList(){
   return this.http.get(this.BaseURI+'/Faculty/ListFaculty').toPromise();
 }
 addFaculty(body){
   return this.http.post(this.BaseURI+'/Faculty/CreateFaculty',body);
 }
 //feedback

 //fields

 //streams

 //studentAccount
    //Get User Liset
  getUserList(){
    return this.http.get(this.BaseURI+'/UserDetail/ListUsers').toPromise();
  }
    //Edit User
  getUserByUserName(userName:string): any {
    return this.http.get(this.BaseURI+'/UserDetail/EditUser/'+userName);
  }
  EditUser(formData,userName:string){
    return this.http.put(this.BaseURI+'/UserDetail/EditUser/'+userName,formData);
   }
    //Delete User
  DeleteUser(userName:string){
    return this.http.delete(this.BaseURI+'/UserDetail/DeleteUser/'+userName).toPromise();
  }

  //subjects

}

  
  
  
  
  
  
  
  
  
  

