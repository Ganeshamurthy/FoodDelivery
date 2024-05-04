import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../Services/signup/signup.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  email: string = '';
  password: string = '';

  private router = inject(Router);
  private signupService = inject(SignupService);

  onSubmit() {
    this.signupService.signup(this.email,this.password).subscribe(data=>{
      if(data){
        alert(data.message)
        this.router.navigateByUrl('/login');
      } else {
        alert(data.error)
      }
    })
  }
}
