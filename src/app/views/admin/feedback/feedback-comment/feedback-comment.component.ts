import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-feedback-comment',
  templateUrl: './feedback-comment.component.html',
  styles: [
  ]
})
export class FeedbackCommentComponent implements OnInit {

  feedbackDetails = new FormGroup({});
  
  constructor(
    private service : AdminService,
    private router : Router,    
    private toastr : ToastrService,
    public fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<FeedbackCommentComponent>) { }

  ngOnInit(): void {
    this.InitialValueFrom();
    this.feedbackDetails.setValue(this.data.data);
    console.error(this.data.data)
  }

  InitialValueFrom(){
    this.feedbackDetails = this.fb.group({
      fbID: [''],
      fbSubject: [''],
      studentName: [''],
      fbEmail: [''],
      fbContent: [''],
      date: [''],
      isResolve: ['']
    });
  }

  onSubmit(){
    this.service.resolveFeedback(this.data.data.fbID ,this.feedbackDetails.value).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/Admin/Feedback');
        this.toastr.success('Success','Resold feedback.');  
      },
      err=>{
        if(err.status == 400)
          this.toastr.error('Something is wrong','try again failed.');
        else
          console.log(err);
      }
    )
  }

}