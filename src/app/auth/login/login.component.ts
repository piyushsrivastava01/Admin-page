import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  error = '';

  // yahi demo id / password hai:
  private demoEmail = 'admin@demo.com';
  private demoPassword = 'Demo@123';

  constructor(private router: Router) {}

  submit() {
    this.error = '';

    if (this.email !== this.demoEmail || this.password !== this.demoPassword) {
      this.error = 'Invalid demo credentials';
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/admin/system/users']);
    }, 500);
  }
}
