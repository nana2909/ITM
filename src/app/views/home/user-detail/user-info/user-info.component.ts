import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userDetail: any;

  constructor(private router: Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetail=res;
      },
      err =>{
        console.log(err);
      },
    );
  }

}
