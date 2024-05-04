import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCartService {

  http = inject(HttpClient);

  getCart(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/getCart/${id}`)
  }
  
}
