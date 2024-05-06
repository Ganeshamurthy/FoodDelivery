import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private http = inject(HttpClient);

  checkOut(body:any):Observable<any>{
    return this.http.post('http://localhost:8080/create-checkout-session',body)
  }
}
