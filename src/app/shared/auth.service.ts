import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  users:User[] = [];
  constructor(private router: Router,private datasrv:DataServiceService) { }

  login(email: string, password: string): void {
    this.datasrv.getUsers().subscribe(
      (data) => {
        let log = false
        this.users = data;
        for (let index of this.users) {
          if (email === index.email && password === index.username) {
              this.isAuthenticatedSubject.next(true);
              this.router.navigateByUrl('');
              // Exit the loop once a match is found
              log = true;
              break;
          }
      }
      
      if(!log){
        this.isAuthenticatedSubject.next(false);
      }

      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );

    console.log(this.isAuthenticatedSubject)

  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
