import { Injectable } from '@angular/core';
import { Invoice } from '../../../shared/model/e-commerce/invoice.model'
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { BehaviorSubject, Subscriber } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  public invoiceDetails: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;
  public invoice: Invoice[] = [];
  public OrderDetails: any;
  constructor(private router: Router) {
  }

  public getOrderItems(): Invoice {
    return this.OrderDetails;
  }

  public createOrder(product: any, details: any, amount: any) {
    var item = {
      shippingDetails: details,
      product: product,
      totalAmount: amount
    };
    this.OrderDetails = item;
    this.router.navigate(['/ecommerce/invoice']);
  }

}
