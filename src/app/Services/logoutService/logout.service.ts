import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
 private http = inject(HttpClient);

  logout():Observable<any>{
    const id = localStorage.getItem('id')
    return this.http.get(`http://localhost:8080/logOut/${id}`);
  }
}
