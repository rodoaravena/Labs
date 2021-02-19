import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SharedModule } from "../../shared/shared.module";
import { ProductListComponent } from './product-list/product-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { QuickViewComponent } from './quick-view/quick-view.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PriceComponent } from './colection/filter/price/price.component';
import { ColorComponent } from './colection/filter/color/color.component';
import { BrandComponent } from './colection/filter/brand/brand.component';
import { OrderByPipe } from '../../shared/services/e-commerce/order-by.pipe';
import { ProductsService } from '../../shared/services/e-commerce/products.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPrintModule } from 'ngx-print';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';


@NgModule({
  declarations: [
    OrderHistoryComponent,
    QuickViewComponent,
    AddCartComponent,
    WishListComponent,
    ProductListComponent,
    CheckOutComponent,
    InvoiceComponent,
    ProductsComponent,
    ProductDetailComponent,
    AddCartComponent,
    CheckOutComponent,
    InvoiceComponent,
    PriceComponent,
    ColorComponent,
    BrandComponent,
    OrderByPipe,
    WishListComponent,
    QuickViewComponent,
    PaymentDetailComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    NgxDatatableModule,
    SharedModule,
    CommonModule,
    CarouselModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    Ng5SliderModule,
    Ng2SearchPipeModule,
    GalleryModule.forRoot()
  ],
  providers: [ProductsService, NgbActiveModal],
  entryComponents: [ProductsComponent],
})
export class ECommerceModule { }
