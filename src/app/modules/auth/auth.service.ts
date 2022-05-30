import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../../../config';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

export interface AuthResponseData {
  refreshToken: string;
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuth$ = new BehaviorSubject(false);
  receiptStatus$ = new BehaviorSubject('null');
  userUuid$ = new BehaviorSubject('');
  baseUrl = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient, private router: Router) {}

  sendRegistrationRequest(tel: string | null): Subscription {
    const body = {
      username: tel
    };
    return this.http.post(`${this.baseUrl}/users/registration/`, body).subscribe(res => console.log(res));
  }

  sendLoginRequest(username: string | null, password: string): Observable<any> {
    const body = {
      username,
      password
    };
    return this.http.post(`${this.baseUrl}/users/auth/jwt/create/`, body).pipe(map((res: any) => {
      if (res && res.access) {
        this.setTokenToStorage(res.access, res.refresh);
        this.getUserInfo();
      }
      return res;
    }));
  }

  setTokenToStorage(token: string, refresh: string): void {
    localStorage.setItem('currentUser', JSON.stringify({token, refreshToken: refresh}));
  }

  getUserInfo(): void {
    this.http.get(`${this.baseUrl}/users/auth/users/me/`).subscribe((res: any) => {
      this.checkReceiptStatus(res);
      this.isUserAuth$.next(true);
      this.userUuid$.next(res.user_uuid);
      this.router.navigate(['']);
    });
  }

  refreshToken(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.http.post(`${this.baseUrl}/auth/jwt/refresh/`, {refresh: currentUser.refreshToken}).subscribe((res: any) => {
      this.setTokenToStorage(res.access, currentUser.refreshToken);
      this.getUserInfo();
    }, err => {
      this.logOut();
    });
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    if (!window.location.href.includes('auth')) {
      this.router.navigate(['/auth']);
    }
  }

  checkReceiptStatus(userInfo: any): void {
    if (userInfo.receipt_status === null) {
      this.receiptStatus$.next('null');
    } else if (userInfo.receipt_status === 'In_process') {
      this.receiptStatus$.next('inProcess');
    } else if (userInfo.receipt_status === 'Approved') {
      this.receiptStatus$.next('approved');
    } else if (userInfo.receipt_status === 'Error') {
      this.receiptStatus$.next('error');
    }
  }
}
