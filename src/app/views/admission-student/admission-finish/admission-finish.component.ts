import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admission-finish',
  templateUrl: './admission-finish.component.html',
  styleUrls: ['./admission-finish.component.css']
})
export class AdmissionFinishComponent implements OnInit,OnDestroy  {
  admissionKey: string;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.admissionKey = params['key']; 

      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
