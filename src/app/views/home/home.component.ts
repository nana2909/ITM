import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails: any;

  constructor(private router: Router,private service:UserService) { }

  ngOnInit() {
  this.service.getUserProfile().subscribe(
    res =>{
      this.userDetails=res;
    },
    err =>{
      console.log(err);
    },
  );
}
  
onLogOut(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}
}
