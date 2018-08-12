import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class NotAuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.isNotLoggedIn();
  }

  canLoad(): Observable<boolean> {
    return this.auth.isNotLoggedIn();
  }
}
