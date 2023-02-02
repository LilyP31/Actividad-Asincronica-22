import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  group(arg0: { pass: (string | { validators: ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors | null)[]; })[]; usu: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors | null))[]; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login() {
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.changeLoginStatusSubject.next(true);
  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (!isLogged) {
      this.urlUsuarioIntentaAcceder = url;
      return false;
    }
    return true;
  }
}
