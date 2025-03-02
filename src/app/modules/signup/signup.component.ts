import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private router: Router) {}

  signUp() {
    if (this.password === this.confirmPassword) {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(['/login']);
      this.clearForm();
    } else {
      alert('Passwords do not match!');
    }
  }
  clearForm() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
