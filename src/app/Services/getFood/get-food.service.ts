import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFoodService {

  http = inject(HttpClient);

  getData():Observable<any>{
    return this.http.get('http://localhost:8080/getProduct');
  }
}
