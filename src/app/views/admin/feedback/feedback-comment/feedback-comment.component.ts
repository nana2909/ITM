import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-comment',
  templateUrl: './feedback-comment.component.html',
  styles: [
  ]
})
export class FeedbackCommentComponent implements OnInit {

  feedbackDetails = new FormGroup({});
  
  constructor(    
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
      fbContent: [''],
      date: ['']
    });
  }

}