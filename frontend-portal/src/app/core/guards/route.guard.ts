import { CanActivateFn, Router } from '@angular/router';
import { authQ } from '../stores/auth.repository';
import { inject } from '@angular/core';

export const routeGuard: CanActivateFn = (route, state) => {
  const currentUser = authQ();
  const router = inject(Router);
  if (currentUser) {
    return true;
  }
  router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
  return false;
};
