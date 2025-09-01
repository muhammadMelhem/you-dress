import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

const API_BASE_URL = 'http://localhost:8003/api';
const GATEWAY_URL = 'http://localhost:8003';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Initiate login by redirecting to the BFF via the Gateway
  login(): void {
    window.location.href = `${GATEWAY_URL}/oauth2/oauth2/authorization/you-dress-authorization-server`;
  }

  // Call the BFF's logout endpoint
  logout(): Observable<any> {
    return this.http.post(`${GATEWAY_URL}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => {
          // Clear any local state and redirect on success
          window.location.href = '/';
        })
      );
  }

  // Get the current user from the BFF
  getUser(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/user`, { withCredentials: true });
  }
}
