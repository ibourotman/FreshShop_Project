import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) { }

  login(email: string, password: string): void {
    // Implement your login logic here
    // For example, check the input values against a predefined list of users
    if (email === 'admin' && password === 'admin') {
      this.isAuthenticatedSubject.next(true);
      this.router.navigateByUrl('');

    } else {
      this.isAuthenticatedSubject.next(false);
    }
    console.log(this.isAuthenticatedSubject)

  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
