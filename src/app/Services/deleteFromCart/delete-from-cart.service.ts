import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteFromCartService {

  http = inject(HttpClient);

  removeItem(u_id: number, p_id?: number | undefined) {
    return this.http.delete(`http://localhost:8080/deleteCart/${p_id}/${u_id}`);
  }
}
