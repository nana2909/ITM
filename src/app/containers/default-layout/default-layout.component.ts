import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router: Router,private service:UserService) { }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  onLogOut(){
    this.service.logout();
  }
}
