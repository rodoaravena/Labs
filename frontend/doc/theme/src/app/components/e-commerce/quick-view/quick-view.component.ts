import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { Products } from '../../../shared/model/e-commerce/product.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbRatingConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { CartService } from '../../../shared/services/e-commerce/cart.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuickViewComponent implements OnInit {
  @Input() productDetail: any;

  public cartItems: Observable<CartItem[]> = of([]);
  public selectCartItems: CartItem[] = [];
  public counter: number = 1;
  public product: Products = {};
  public detailCnt = [];
  public slidesPerPage = 4;
  public products: Products[];

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, config: NgbRatingConfig, public productService: ProductsService, private cartService: CartService, private ngb: NgbModal) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngb.dismissAll();
      }
    });

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });

  }

  public addToCart(product: Products, quantity) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
  }

  public buyNow(product: Products, quantity) {
    if (quantity > 0)
      this.cartService.addToCart(product, parseInt(quantity));
    this.router.navigate(['/ecommerce/check-out']);
  }

  ngOnInit() {
    this.cartItems = this.cartService.getAll();
    this.cartItems.subscribe(selectCartItems => this.selectCartItems = selectCartItems)
  }

}
