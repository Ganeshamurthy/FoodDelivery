import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptyCartService {

  private http = inject(HttpClient);

  truncate(id:string):Observable<any>{
    return this.http.get(`http://localhost:8080/truncate/${id}`)
  }
}
