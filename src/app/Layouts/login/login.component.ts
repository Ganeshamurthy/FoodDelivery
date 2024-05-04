import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginService = inject(LoginService);

  email: string = '';
  password: string = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }

  toLogin() {
    console.log('HELLO---------------------------------');
    this.router.navigate(['/signup']);
  }

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe((data) => {
      if (data.token && data.id) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        this.router.navigate(['/home']);
      } else {
        alert(data.Error);
        
      }
    });
  }
}
