import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscriber, Observable } from 'rxjs';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { Products } from '../../../shared/model/e-commerce/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';
import { ToastrService } from 'ngx-toastr';

let products = JSON.parse(localStorage.getItem("cartItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  public wishItems: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;
  private itemsInCart: CartItem[] = [];

  public itemList: Products[];
  constructor(private route: ActivatedRoute, private productService: ProductsService, private toastrService: ToastrService) {
    this.wishItems.subscribe(products => products = products);
    this.itemList = [];
  }

  getAll(): Observable<CartItem[]> {
    const itemsList = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    return <Observable<CartItem[]>>itemsList;
  }

  public addToWishList(product: Products, quantity: number): CartItem | boolean {
    var item: CartItem | boolean = false;

    let hashItem = products.find((items, index) => {
      if (items.product.id == product.id) {
        let qty = products[index].quantity + quantity;
        let stock = this.calculateStockCounts(products[index], quantity);
        if (qty != 0 && stock) {
          products[index]['quantity'] = qty;
          this.toastrService.success('This product has been already added to cart.');
          localStorage.setItem('cartItem', JSON.stringify(products));

        }
        return true;
      }
    });

    if (!hashItem) {
      item = { product: product, quantity: quantity };
      products.push(item);
      this.toastrService.success('This product has been added to cart.');
    }
    localStorage.setItem('cartItem', JSON.stringify(products));
    return item;

  }

  public calculateStockCounts(product: CartItem, quantity): CartItem | Boolean {
    let qty = product.quantity + quantity;
    let stock = product.product.stock;
    if (stock < qty) {
      this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.');
      return false
    }
    return true
  }

  public removeWishItem(item: CartItem) {
    if (item === undefined) return false;
    const index = products.indexOf(item);
    products.splice(index, 1);
    localStorage.setItem('cartItem', JSON.stringify(products));

  }

}
