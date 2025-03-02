// welcome.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: `

  `,
  templateUrl: './user.component.html',
  imports: []
})
export class UserComponent {
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.signOut();
    window.location.href = '/'; // Redirect to login page after signing out
  }
}
