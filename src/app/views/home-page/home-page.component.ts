import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service : HomeService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  formFeedback = this.fb.group({
    fbID: [0],
    fbSubject: ['', Validators.required],
    studentName: ['', Validators.required],
    fbContent: ['', Validators.required],
    fbEmail: ['', Validators.required],
    date: ['2021-01-27T15:08:36.095Z'],
    isResolve: ['']
  });

  onSubmitFeed(){
    console.log(this.formFeedback.value)
    this.service.postFeedBack(this.formFeedback.value).subscribe(
      res => {
        this.formFeedback.reset()
        this.toastr.success('Success','Added new Feedback.');
      },
      err => {
        console.warn(err)
      }
    )
  }

}
