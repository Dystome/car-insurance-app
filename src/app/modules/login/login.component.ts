import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

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
  private signedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  login() {
    if (this.authService.signIn(this.username, this.password)) {
      this.router.navigate(['app-component']);
    } else {
      alert('Invalid credentials');
    }
  }
  goToSignUp() {
    this.router.navigate(['signup']);
  }
}

