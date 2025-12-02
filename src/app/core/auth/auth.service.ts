import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  // Cambiá esta URL por la de tu backend real
  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'auth_token';

  login(email: string, password: string): Observable<{ token: string }> {
    // ÚNICA llamada HTTP del proyecto
    return this.http
      .post<{ token: string }>(`${this.API_URL}/auth/login`, { email, password })
      .pipe(
        tap(res => {
          // Guarda la sesión en localStorage
          localStorage.setItem(this.TOKEN_KEY, res.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
