import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { Field, HomeService, Stream } from '../../shared/home.service';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-admission-student',
  templateUrl: './admission-student.component.html',
  styleUrls: ['./admission-student.component.css']
})
export class AdmissionStudentComponent implements OnInit {

  
  
  Streams : Stream[];
  Fields : Field[];
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  constructor(
              public service:UserService, 
              public service2: HomeService,
              public toastr: ToastrService
  ) { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.getStreams();
    this.getFields();
  }

  onSubmit(){
    this.service.submitAdmision().subscribe(
      res => {
        console.info(res)
      },
      err => {
        console.error(err)
      }
    )
  }

  downloadAsPDF(){

    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    
    let content = document.getElementById('pdfTable')
    html2canvas(content).then((canvas)=>{
      var imgData = canvas.toDataURL('image/png')

      var doc  = new jsPDF("l", "px", "a4");
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 0,0 ,width,height)
      doc.save('image.pdf');
    })
   
  }

  getStreams(){
    this.service2.getAllStream().subscribe(
      (res:any) => {
        console.log(res);
        this.Streams = Object.values(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  getFields(){
    this.service2.getAllField().subscribe(
      (res:any) => {
        console.info(res);
        this.Fields = Object.values(res);
      },
      err => {
        console.error(err);
      }
    )
  }
}
