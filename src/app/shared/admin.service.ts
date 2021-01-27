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
CourseForm=this.fb.group({
  CourseCode : [null,Validators.required],
  CourseName : [null,Validators.required],
  Description:[null,Validators.required],
  StreamCode:[null,Validators.required],
  FieldCode:[null,Validators.required],
});
getCoursesList(){
return this.http.get(this.BaseURI+'/Courses/ListCourse');
}
addCourse(Course)
{
return this.http.post(this.BaseURI+'/Courses/CreateCourse',Course);
}
getCourses(CourseCode:string)
{
return this.http.get(this.BaseURI + '/Courses/GetCourses/'+CourseCode);
}
putCourses(CourseCode:string,str)
{
return this.http.put(this.BaseURI+'/Courses/EditCourse/'+CourseCode,str);
}
DeleteCourses(CourseCode:string){
return this.http.delete(this.BaseURI+'/Courses/DeleteCourse/'+CourseCode);
}


 //department
 departmentForm = this.fb.group({
   DepartmentID:[null,Validators.required],
   Name:[null,Validators.required],
   Description:[null,Validators.required],
   isActive:[null,Validators.required],
 })
  getDepartmentList(){
    return this.http.get(this.BaseURI+'/Department/ListDepartments');
  }
  addDepartment(body){
    return this.http.post(this.BaseURI+'/Department/CreateDepartment',body);
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
  isActive:[null,Validators.required],
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
FieldForm=this.fb.group({
  FieldCode : [null,Validators.required],
  FieldName : [null,Validators.required],
  StreamCode:[null,Validators.required],
  });
 getFieldList(){
  return this.http.get(this.BaseURI+'/Fields/ListFields');
 }
 addField(f){
  return this.http.post(this.BaseURI+'/Fields/CreateField',f);
}
getField(FieldCode:string)
{
  return this.http.get(this.BaseURI + '/Fields/GetFields/'+FieldCode);
}
putField(FieldCode:string,f)
{
  return this.http.put(this.BaseURI+'/Fields/EditFields/'+FieldCode,f);
}
DeleteField(FieldCode:string){
  return this.http.delete(this.BaseURI+'/Fields/DeleteFields/'+FieldCode);
}

 //streams
 StreamForm=this.fb.group({
  streamCode : [null,Validators.required],
  streamName : [null,Validators.required],
  });
 getStreamList(){
  return this.http.get(this.BaseURI+'/Streams/ListStreams');
 }
 addStream(str){
  return this.http.post(this.BaseURI+'/Streams/CreateStreams',str);
}
getStream(StreamCode:string)
{
  return this.http.get(this.BaseURI + '/Streams/GetStreams/'+StreamCode);
}
putStream(StreamCode:string,str)
{
  return this.http.put(this.BaseURI+'/Streams/EditStreams/'+StreamCode,str);
}
DeleteStream(StreamCode:string){
  return this.http.delete(this.BaseURI+'/Streams/DeleteStreams/'+StreamCode);
}

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

   //Option subjects
   OpSubForm=this.fb.group({
    subjectID : [null,Validators.required],
    subjectName:[null,Validators.required],
    });
  getOpsubjectList(){
    return this.http.get(this.BaseURI+'/OpSubjects/ListOpSubs');
  }
  addOpSub(sub){
    return this.http.post(this.BaseURI+'/OpSubjects/CreateOpSubs',sub);
  }
  getOpsubject(subjectID:string)
  {
    return this.http.get(this.BaseURI + '/OpSubjects/GetOpSubs/'+subjectID);
  }
  putOpSubject(subjectID:string,sub)
  {
    return this.http.put(this.BaseURI+'/OpSubjects/EditOpSubs/'+subjectID,sub);
  }

  DeleteOpSubs(subjectID:string){
    return this.http.delete(this.BaseURI+'/OpSubjects/DeleteOpSubs/'+subjectID);
  }

//special Subject
SpeSubForm = this.fb.group({
  subjectID:  [null,Validators.required],
  subjectName:[null,Validators.required],
  fieldCode:[null,Validators.required],
})
  getSpesubjectList(){
    return this.http.get(this.BaseURI+'/SpeSubjects/ListSpeSubs');
  }
  addSpeSub(sub){
    return this.http.post(this.BaseURI+'/SpeSubjects/CreateSpeSubs',sub);
  }
  getSpesubject(subjectID:string)
  {
    return this.http.get(this.BaseURI + '/SpeSubjects/GetSpeSubs/'+subjectID);
  }
  putSpeSubject(subjectID:string,sub)
  {
    return this.http.put(this.BaseURI+'/SpeSubjects/EditSpeSubs/'+subjectID,sub);
  }

  DeleteSpeSubs(subjectID:string){
    return this.http.delete(this.BaseURI+'/SpeSubjects/DeleteSpeSubs/'+subjectID);
  }


}

  
  
  
  
  
  
  
  
  
  

