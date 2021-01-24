import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-nav-home-page',
  templateUrl: './nav-home-page.component.html',
  styleUrls: ['./nav-home-page.component.css']
})
export class NavHomePageComponent implements OnInit {
  public userDetail : any;
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router,private service:UserService) { }

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