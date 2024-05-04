import { Routes } from '@angular/router';
import { HomeComponent } from './Layouts/home/home.component';
import { AboutUsComponent } from './Layouts/about-us/about-us.component';
import { ContactComponent } from './Layouts/contact/contact.component';
import { FoodProductComponent } from './Layouts/food-product/food-product.component';
import { LoginComponent } from './Layouts/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { authguardGuard } from './Guard/authguard.guard';
import { SignupComponent } from './Layouts/Signup/signup/signup.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,

    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"",
        component:NavbarComponent,
        canActivateChild:[authguardGuard],
        children:[
            {
                path:'home',
                component:HomeComponent,
                        
            },
            {
                path:'aboutUs',
                component:AboutUsComponent
            },
            {
                path:'contact',
                component:ContactComponent
            },
            {
                path:'food',
                component:FoodProductComponent
            },
        
            {
                path:'home/food',
                redirectTo:'food',
                pathMatch:'full'
            },
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full'
            },
        ]
    },

    {
        path:'login/signup',
        redirectTo:'signup',
        pathMatch:'full'
    },
    {
        path:'signup/login',
        redirectTo:'login',
    },
   
];
