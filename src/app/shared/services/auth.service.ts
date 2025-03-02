
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

   constructor(private router: Router) {}

  signIn(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('user') || '{}');
    if (username === users.username && password === users.password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  signOut(): void {
    this.isLoggedIn = false;
    this.router.navigate(['signup']);
  }
}
