import { UserService } from './../shared/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private service:UserService) { }
  canActivate(
     next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):Observable<boolean> {
        return this.service.IsLoggedIn.pipe(
          take(1),
          map((isLoggedIn:boolean) =>{
            if(localStorage.getItem('token') != null){
              this.service.loggedIn.next(true);
              let roles = next.data['permittedRoles'] as Array<string>;
              if(roles){
                if(this.service.roleMatch(roles)) return true;
                else{
                  this.router.navigate(['home']);
                  return false;
                }
              }
              return true;
            }
            else{
              this.router.navigate(['HomePage']);
              return false; 
            
            }
          }
        )   
        )
        }          
  }

