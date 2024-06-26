import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
  private http = inject(HttpClient);

  calculate_price(id:string|null):void{
    console.log(id)
    this.http.get(`http://localhost:8080/getTotalPrice/1`).subscribe(data=>{
      console.log(data);
      
    });
  }
}
