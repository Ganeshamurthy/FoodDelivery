import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private http = inject(HttpClient);

  signup(email:string,password:string):Observable<any>{
    return this.http.post('http://localhost:8080/createUser',{
      "email":email,
      "password":password
    })
  }
}
