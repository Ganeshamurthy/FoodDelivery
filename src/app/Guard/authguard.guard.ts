import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authguardGuard: CanActivateChildFn = (childRoute, state) => {
  const navigate:Router = inject(Router);
  const token = localStorage.getItem('token');
  
  if(token!==null){
    return true;
  } else {
    navigate.navigateByUrl('/login');
    console.log("HELLO");
    
    return false;
  }
};
