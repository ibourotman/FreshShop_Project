import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './shared/data-service.service';
import { AuthService } from './shared/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PROJECT';
  isLoginPage:boolean = false;
  constructor(private datasrv: DataServiceService , private AuthService:AuthService,private router: Router) {
    
    
   }
   ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';

      }
    });
    this.AuthService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // Fetch user data or perform any actions needed when the user is logged in
        this.datasrv.getOrdersForUser(1).subscribe(
          (data) => {
            const totalOrder = data.items.length;
            this.datasrv.updateTotalOrder(totalOrder);
          },
          (error) => {
            console.error('Error fetching products:', error);
          }
        );
      }
    });
  }

}
