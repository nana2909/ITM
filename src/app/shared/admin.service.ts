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
 departmentForm = this.fb.group({
   DepartmentID:[null,Validators.required],
   Name:[null,Validators.required],
   Description:[null,Validators.required],
   imgUrl:'',
   tbFaculties:''
 })
  getDepartmentList(){
    return this.http.get(this.BaseURI+'/Department/ListDepartments');
  }
  addDepartment(body){
    return this.http.post(this.BaseURI+'/Department​/CreateDepartment',body);
  }
  getDepartment(id:string){
    return this.http.get(this.BaseURI + '/Department/GetDepartment/'+id);
  }
  putDepartment(id:string,body){
    return this.http.put(this.BaseURI+'/Department/EditDepartment/'+id,body,{responseType: 'text'});
  }
  deleteDepartment(id:string){
    return this.http.delete(this.BaseURI+'/Department/DeleteDepartment/'+id);
  }


 //facilities
 facilitiesForm=this.fb.group({
   FacCode:[null,Validators.required],
   FacName:[null,Validators.required],
   isActive:[null,Validators.required],
   imgUrl:''
 })
  getFacilitiesList(){
    return this.http.get(this.BaseURI+'/Facilities/ListFacilities');
  }
  addFacilities(body){
    return this.http.post(this.BaseURI+'/Facilities/CreateFacility',body);
  }
  getFacility(id:string){
    return this.http.get(this.BaseURI + '/Facilities/GetFacility/'+id);
  }
  putFacility(id:string,body){
    return this.http.put(this.BaseURI+'/Facilities/EditFacility/'+id,body,{responseType: 'text'});
  }
  deleteFacility(id:string){
    return this.http.delete(this.BaseURI+'/Facilities/Delete/'+id);
  }



 //faculty
 facultyForm=this.fb.group({
  FacultyID : [null,Validators.required],
  Name:[null,Validators.required],
  DoB: [null,Validators.required],
  Degree:[null,Validators.required],
  DepartmentID:[null,Validators.required],
  ImgUrl:''
  });
 
 getFacultyList(){
   return this.http.get(this.BaseURI+'/Faculty/ListFaculty');
 }
 addFaculty(body){
   return this.http.post(this.BaseURI+'/Faculty/CreateFaculty',body);
 }
 getFaculty(id:string){
  return this.http.get(this.BaseURI + '/Faculty/GetFaculty/'+id);
}
putFaculty(id:string,body){
  return this.http.put(this.BaseURI+'/Faculty/EditFaculty/'+id,body,{responseType: 'text'});
}

deleteFaculty(id:string){
  return this.http.delete(this.BaseURI+'/Faculty/DeleteFaculty/'+id);
}


 //feedback
 getFeedbackList(){
  return this.http.get(this.BaseURI+'/Feedback/ListFeedbacks');
 }

 getFeedbackById(id: string){
  return this.http.get(this.BaseURI+'/Feedback/GetFeedback/'+ id);
 }

 resolveFeedback(id: string, body){
  return this.http.put(this.BaseURI+'/Feedback/ResolveFeedback/'+ id, body);
 }

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

  
  
  
  
  
  
  
  
  
  

