
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  public userDetail : any;

  constructor(private router: Router,private service:UserService) { }

  ngOnInit() {
    this.userDetail ={
      userName:'',
      email:'',
      fullName:'',
    }
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetail=res;
        //console.log(userDetail);
      },
      err =>{
        console.log(err);
      },
    );
    
  }

}
