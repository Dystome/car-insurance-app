import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  login() {
    const users = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.username === users.username && this.password === users.password) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}

