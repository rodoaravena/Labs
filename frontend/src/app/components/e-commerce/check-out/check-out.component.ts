import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { CartService } from '../../../shared/services/e-commerce/cart.service';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../../../shared/services/e-commerce/invoice.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  public red_border: boolean = false;
  public cartItems: Observable<CartItem[]> = of([]);
  public checkOutItems: CartItem[] = [];
  public checkoutForm: FormGroup;
  public amount: number;
  public submitted = false;
  public userInfo: string;
  constructor(private fb: FormBuilder, public productService: ProductsService, private cartService: CartService,
    private invoiceService: InvoiceService) {
    this.createForm();
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      this.red_border = true;
      return;
    }
    this.userInfo = this.checkoutForm.value;
    this.invoiceService.createOrder(this.checkOutItems, this.userInfo, this.amount);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  ngOnInit() {
    this.cartItems = this.cartService.getAll();
    this.cartItems.subscribe(products => this.checkOutItems = products);
    this.getTotal().subscribe(amount => this.amount = amount);
  }

}
