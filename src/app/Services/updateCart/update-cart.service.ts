import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCartService {

  http = inject(HttpClient);
  updateCart(u_id: number, p_id: number, quantity: number) {
    return this.http.post(`http://localhost:8080/updateCart?u_id=${u_id}&p_id=${p_id}&qty=${quantity}`,{});
  }
}
