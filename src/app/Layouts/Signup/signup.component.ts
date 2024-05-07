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
  name:string = ''
  password: string = '';
  address:string = '';
  postelCode:string ='';
  state:string='';
  city:string=''

  private router = inject(Router);
  private signupService = inject(SignupService);

  onSubmit() {
    this.signupService.signup(this.email,this.password,this.name,this.address,this.postelCode,this.state,this.city).subscribe(data=>{
      if(data){
        alert(data.message)
        this.router.navigateByUrl('/login');
      } else {
        alert(data.error)
      }
    })
  }
}
