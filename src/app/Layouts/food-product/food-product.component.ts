import { Component, OnInit, inject } from '@angular/core';
import { GetFoodService } from '../../Services/getFood/get-food.service';
import {  HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card'
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddCartService } from '../../Services/addCart/add-cart.service';
import { CommonModule } from '@angular/common';
import {SkeletonModule} from 'primeng/skeleton'

@Component({
  selector: 'app-food-product',
  standalone: true,
  imports: [HttpClientModule,MatCardModule,MatButtonModule,MatIconModule,CommonModule,SkeletonModule],
  providers:[GetFoodService,AddCartService],
  templateUrl: './food-product.component.html',
  styleUrl: './food-product.component.scss',
})
export class FoodProductComponent implements OnInit {

  // @ViewChildren('addCartBtn') btn!:QueryList<MatButton>

  foodApi = inject(GetFoodService);
  addcart = inject(AddCartService);
  food_arr:any[] = [];
  ngOnInit() {
    this.foodApi.getData().subscribe(data=>{
      data.message.map((item:any)=>{
        this.food_arr.push(item)
      })
    })
  }
  show(event:MatButton){
    //@ts-ignore
    this.addcart.addToCart(event._elementRef.nativeElement.value,localStorage.getItem('id')).subscribe();
  }
}
