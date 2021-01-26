import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../shared/user.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-home-page',
  templateUrl: './nav-home-page.component.html',
  styleUrls: ['./nav-home-page.component.css']
})


export class NavHomePageComponent implements OnInit {
  public userDetail : any;
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router,private service:UserService,private viewportScroller: ViewportScroller) { }
  public onClick(elementId: string): void { 
    setTimeout(()=>this.viewportScroller.scrollToAnchor(elementId),50);
  }


  ngOnInit(): void {
    if (localStorage.getItem('token')!=null){
      this.service.loggedIn.next(true);
    }
  this.isLoggedIn$ = this.service.IsLoggedIn;
  if (this.service.IsLoggedIn){
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
      
  }}
  
onLogOut(){
  this.service.logout();
}
}