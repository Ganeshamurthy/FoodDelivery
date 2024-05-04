import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);
  login(email:string,password:string):Observable<any>{
    return this.http.post('http://localhost:8080/loginAuth',{
      "email":email,
      "password":password
    })
  }
}
