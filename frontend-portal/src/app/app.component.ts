import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fadeSlideAnimation, headerAnimation, siderAnimation } from './core/animations/fade-slide-right';
import { user$ } from './core/stores/user.repository';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    fadeSlideAnimation,
    headerAnimation,
    siderAnimation
  ]
})
export class AppComponent {

  router = inject(Router);
  auth = inject(AuthService);
  user$ = user$;
  isCollapsed = false;
  isDrawerVisible = false;

  constructor() {
    this.user$.subscribe(user => {
      if (user) {
        // this.router.navigate([user.role])
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
