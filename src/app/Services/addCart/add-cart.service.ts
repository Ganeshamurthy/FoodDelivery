import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  http = inject(HttpClient);
  
  addToCart(p_id:number,uid:string):Observable<any>{
    return this.http.post(`http://localhost:8080/addCart/${uid}/${p_id}`,{});
  }
  
}
