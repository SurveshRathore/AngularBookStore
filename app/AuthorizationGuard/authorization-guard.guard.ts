import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthguardService } from '../service/authguard.service';
import { Observable } from 'rxjs';

// export const authorizationGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };


export class authorizationGuardGuard implements CanActivate {
  constructor(private authguardService:AuthguardService, private router:Router){}
  canActivate(): boolean{
    if(!this.authguardService.gettoken())
    {
      this.router.navigateByUrl("user/login");
      alert("please login");
    }
    return this.authguardService.gettoken();
  } 
    
}
