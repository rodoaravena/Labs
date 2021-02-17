import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full',
        data: {
          title: "Product",
          breadcrumb: "Product"
        }
      },
      {
        path: "product-details/:id",
        component: ProductDetailComponent,
        data: {
          title: "Product Detail",
          breadcrumb: "Product Detail"
        },

      },
      {
        path: "quick-view/:id",
        component: QuickViewComponent,
        data: {
          title: "Quick View",
          breadcrumb: "Quick View"
        },
      },
      {
        path: "add-cart",
        component: AddCartComponent,
        data: {
          title: "Add To Cart",
          breadcrumb: "Add To Cart"
        }
      },
      {
        path: "wish-list",
        component: WishListComponent,
        data: {
          title: "Wish List",
          breadcrumb: "Wish List"
        }
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        data: {
          title: "Check Out",
          breadcrumb: "Check Out"
        }
      },
      {
        path: "invoice",
        component: InvoiceComponent,
        data: {
          title: "Invoice",
          breadcrumb: "Invoice"
        }
      },
      {
        path: 'payment/detail',
        component: PaymentDetailComponent,
        data: {
          title: "Payment Details",
          breadcrumb: "Payment Details"
        }
      },
      {
        path: 'order',
        component: OrderHistoryComponent,
        data: {
          title: "Order History",
          breadcrumb: "Order History"
        }
      },
      {
        path: 'product/list',
        component: ProductListComponent,
        data: {
          title: "product list",
          breadcrumb: "product list"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
