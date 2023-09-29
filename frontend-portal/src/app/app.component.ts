import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { auth$, resetAuthStore } from './core/stores/auth.repository';
import { fadeSlideAnimation, headerAnimation, siderAnimation } from './core/animations/fade-slide-right';

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
  user$ = auth$;
  isCollapsed = false;

  logout() {
    resetAuthStore();
    this.router.navigate(['']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
