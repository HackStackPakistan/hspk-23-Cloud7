import { CanActivateFn, Router } from '@angular/router';
import { userQ } from '../stores/user.repository';
import { inject } from '@angular/core';

export const routeGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);

  const currentUser = userQ();
  // console.log("ROUTE: /", route.routeConfig.path);
  // console.log("GUARD: ▼", currentUser?.role, " | ▲", route.data?.roles, " - ", (route.data.roles?.indexOf(currentUser?.role) !== -1));
  if (currentUser) {
    if (route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1) {
      router.navigate(['/forbidden']);
      return false;
    }
    else {
      return true;
    }
  }
  router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
  return false;
};
