import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from '../footer/footer.component';
import { GetCartService } from '../../Services/getCart/get-cart.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { DeleteFromCartService } from '../../Services/deleteFromCart/delete-from-cart.service';
import { UpdateCartService } from '../../Services/updateCart/update-cart.service';
import { FormsModule } from '@angular/forms';
import { LogoutService } from '../../Services/logoutService/logout.service';
import { TotalPriceService } from '../../Services/TotalPrice/total-price.service';
import { PaymentService } from '../../Services/Payment/payment.service';
import { EmptyCartService } from '../../Services/EmptyCart/empty-cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    FooterComponent,
    HttpClientModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [GetCartService, DeleteFromCartService, UpdateCartService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class NavbarComponent implements OnInit {
  @ViewChild('Total_Price') priceEle!: ElementRef<HTMLHeadingElement>;

  getCart = inject(GetCartService);
  removeItem = inject(DeleteFromCartService);
  updateCart = inject(UpdateCartService);
  logoutService = inject(LogoutService);
  totalPriceApi = inject(TotalPriceService);
  chekOutApi = inject(PaymentService);
  truncate = inject(EmptyCartService);
  router = inject(Router);
  //@ts-ignore
  id: number = parseInt(localStorage.getItem('id'));
  qty!: number;
  panelOpenState: boolean = false;
  title = 'foodDelivery';
  isMobile: boolean = false;
  width: number = window.innerWidth;
  mobileWidth: number = 1070;
  product_arr: any[] = new Array();
  flag = ['/home'].includes(location.pathname);
  total_price: number = 0;

  ngOnInit(): void {
    this.isMobile = this.width < this.mobileWidth;
  }
  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    this.isMobile = this.width < this.mobileWidth;
  }
  cartApi() {
    this.total_price = 0;
    this.product_arr = [];
    this.getCart.getCart(this.id).subscribe((data) => {
      if (data.status === 200) {
        data.Result.map((i: any) => {
          this.product_arr.push(i);
        });
        this.total_price = data.total_price;
      }
    });
  }

  removeItemApi(
    btn: MatButton,
    card: HTMLDivElement,
    price: HTMLParagraphElement
  ) {
    this.removeItem
      .removeItem(this.id, btn._elementRef.nativeElement.value)
      .subscribe((data) => {
        //@ts-ignore
        this.total_price = parseInt(data.total_price) - parseInt(price.textContent?.split('₹')[1].trim());
        this.priceEle.nativeElement.textContent = '₹'.concat(
          this.total_price.toString()
        );
      });
    card.remove();
  }

  updateCartRemoveApi(
    minbtn: MatButton,
    addbtn: MatButton,
    h5: HTMLHeadingElement,
    h4: HTMLParagraphElement
  ) {
    let arr = JSON.parse(minbtn._elementRef.nativeElement.value);
    // console.log(arr);

    let p_id = arr[0];
    let qty = arr[1];

    if (qty > 1) {
      this.updateCart.updateCart(this.id, p_id, qty - 1).subscribe((data) => {
        //@ts-ignore
        let dataobj = data.Message.filter((i) => i.p_id == p_id);
        // console.log(dataobj[0]);
        minbtn._elementRef.nativeElement.value = JSON.stringify([
          p_id,
          qty - 1,
        ]);
        addbtn._elementRef.nativeElement.value = JSON.stringify([
          p_id,
          qty - 1,
        ]);
        h5.textContent = dataobj[0].quantity;
        h4.textContent = '₹ ' + dataobj[0].total_price;
        //@ts-ignore
        this.priceEle.nativeElement.textContent = '₹' + data.total_price;
        //@ts-ignore
        this.total_price = data.total_price;
      });
      this.product_arr.map((i) => {
        if (i.p_id == p_id) {
          i.quantity = qty - 1;
        }
      });
    } else {
      this.updateCart.updateCart(this.id, p_id, 1).subscribe((data) => {
        //@ts-ignore
        let dataobj = data.Message.filter((i) => i.p_id == p_id);
        // console.log(dataobj[0]);
        minbtn._elementRef.nativeElement.value = JSON.stringify([p_id, 1]);
        addbtn._elementRef.nativeElement.value = JSON.stringify([p_id, 1]);
        h5.textContent = dataobj[0].quantity;
        h4.textContent = '₹ ' + dataobj[0].total_price;
        //@ts-ignore
        this.priceEle.nativeElement.textContent = '₹' + data.total_price;
        //@ts-ignore
        this.total_price = data.total_price;
      });
      this.product_arr.map((i) => {
        if (i.p_id == p_id) {
          i.quantity = 1;
        }
      });
    }
  }

  updateCartAddApi(
    minbtn: MatButton,
    addbtn: MatButton,
    h5: HTMLHeadingElement,
    h4: HTMLParagraphElement
  ) {
    let arr = JSON.parse(addbtn._elementRef.nativeElement.value);
    // console.log(arr);

    let p_id = arr[0];
    let qty = arr[1];

    this.updateCart.updateCart(this.id, p_id, qty + 1).subscribe((data) => {
      //@ts-ignore
      let dataobj = data.Message.filter((i) => i.p_id == p_id);
      // console.log(dataobj[0]);
      minbtn._elementRef.nativeElement.value = JSON.stringify([p_id, qty + 1]);
      addbtn._elementRef.nativeElement.value = JSON.stringify([p_id, qty + 1]);
      h5.textContent = dataobj[0].quantity;
      h4.textContent = '₹ ' + dataobj[0].total_price;
      //@ts-ignore
      this.priceEle.nativeElement.textContent = '₹' + data.total_price;
      //@ts-ignore
      this.total_price = data.total_price;
    });
    this.product_arr.map((i) => {
      if (i.p_id == p_id) {
        i.quantity = qty + 1;
      }
    });
  }

  logout() {
    this.logoutService.logout().subscribe((data) => {
      console.log(data);
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }

  checkOutpay() {
    let arr: any = [];
    this.product_arr.map((i) => {
      if (i.quantity > 1) {
        arr.push({
          p_name: i.p_name,
          quantity: i.quantity,
          total_price: Math.floor(i.total_price / i.quantity),
        });
      } else {
        arr.push({
          p_name: i.p_name,
          quantity: i.quantity,
          total_price: i.total_price,
        });
      }
    });
    let obj = { Product: arr };

    console.log(arr);

    this.chekOutApi.checkOut(obj).subscribe((data) => {
      this.product_arr=[];
      // @ts-ignore
      this.truncate.truncate(localStorage.getItem('id')).subscribe();
      location.replace(data.url)
    });
  }
}
