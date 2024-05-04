import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  http = inject(HttpClient);
  
  addToCart(p_id:number):Observable<any>{
    return this.http.post(`http://localhost:8080/addCart/1/${p_id}`,{});
  }
  
}
