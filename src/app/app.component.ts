import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Layouts/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule,NavbarComponent,CommonModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  route = inject(Router);
flag = ['/login','/'].includes(location.pathname)
token = (localStorage.getItem('token')===null)
ngOnInit(){
  console.log(this.flag);
  console.log(location.pathname);
}

redirect(route:string){
  this.route.navigate([`/${route}`])
}

}
