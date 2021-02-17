import { Component, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { Products, ColorFilter, ProductColor, ProductTags, TagFilter } from '../../../shared/model/e-commerce/product.model';
import { CartService } from '../../../shared/services/e-commerce/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListService } from '../../../shared/services/e-commerce/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() productDetail: any;

  public items: Products[] = [];
  public products: Products[] = [];
  public colorsFilters: ColorFilter[] = [];
  public colors: ColorFilter[];
  public allItems: Products[] = [];
  public tags: any[] = [];
  public tagsFilters: any[] = [];
  public product: ProductColor[];
  public uniqueColors: ColorFilter[];
  public uniqueProductColor: any;
  public lowPrice: 500;
  public highPrice: 1000;
  public productPrice: number;
  public colorArray: any;
  public sortByOrder: string = '';
  public check: boolean = false;
  public term: string

  constructor(private productService: ProductsService, private cartService: CartService, private modalService: NgbModal, private wishService: WishListService) { }

  public onChangeSorting(val) {
    this.sortByOrder = val;
  }

  public filterItems(): Products[] {
    return this.products.filter((item: Products) => {
      const Colors: boolean = this.colorsFilters.reduce((prev, curr) => { // Match Color
        if (item.colors) {
          if (item.colors.includes(curr.color)) {
            this.active = true
            this.check = true;
            return prev && true;
          }
        }
      }, true);
      const Tags: boolean = this.tagsFilters.reduce((prev, curr) => { // Match Tags
        if (item.tags) {
          if (item.tags.includes(curr)) {
            return prev && true;
          }
        }
      }, true);
      return Colors && Tags; // return true
    });
  }

  public getColors(products) {
    var uniqueColors = []
    var itemColor = Array();
    products.map((product, index) => {
      if (product.colors) {
        product.colors.map((color) => {
          const index = uniqueColors.indexOf(color);
          if (index === -1) uniqueColors.push(color);
        })
      }
    });
    for (var i = 0; i < uniqueColors.length; i++) {
      itemColor.push({ color: uniqueColors[i] })
    }
    this.colors = itemColor
  }

  public updateColor(colors: ColorFilter[]) {
    this.colorsFilters = colors;
  }

  public getTags(products) {
    var uniqueBrands = []
    var itemBrand = Array();
    products.map((product, index) => {
      if (product.tags) {
        product.tags.map((tag) => {
          const index = uniqueBrands.indexOf(tag);
          if (index === -1) uniqueBrands.push(tag);
        })
      }
    });
    for (var i = 0; i < uniqueBrands.length; i++) {
      itemBrand.push({ brand: uniqueBrands[i] })
    }
    this.tags = itemBrand
  }

  public updateTagFilters(tags: any[]) {
    this.tagsFilters = tags;
  }


  public updatePriceFilters(price: any) {
    let pricemin = price.value;
    let maxPrice = price.highValue;
    let items: any[] = [];
    this.productService.getProducts().subscribe((product) => {
      product.filter((item: Products) => {
        if (item.price >= pricemin && item.price <= maxPrice) {
          items.push(item); // push in array
        }
      });
      this.products = items;
    })

  }

  //image set
  detailCnt = [];
  slidesPerPage = 1;

  customOptions: any = {
    slider: 1,
    items: 1,
    margin: 30,
    loop: false,
    pagination: false,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  }

  sidebaron: boolean = false;
  show: boolean = false;
  open: boolean = false;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  openFilter() {
    if (this.show == true && this.sidebaron == true) {
      this.show = false
      this.sidebaron = false
    }
    else {
      this.show = true
      this.sidebaron = true

    }
  }
  openMediaFilter() {
    if (this.show == false && this.sidebaron == false && this.open == false) {
      this.show = true
      this.sidebaron = true
      this.open = true
    } else {
      this.show = false
      this.sidebaron = false
      this.open = false
    }
  }

  gridOpen() {
    this.gridOptions = true;
    this.listView = false
    this.col_xl_3 = true;

    this.xl_4 = true;
    this.col_xl_4 = false;
    this.col_sm_4 = false;

    this.col_xl_6 = false;
    this.col_sm_6 = true;

    this.col_xl_2 = false;
    this.col_xl_12 = false;
  }

  listOpen() {
    this.gridOptions = false
    this.listView = true;
    this.col_xl_3 = true;
    this.xl_4 = true;
    this.col_xl_12 = true;
    this.col_xl_2 = false;

    this.col_xl_4 = false;
    this.col_sm_4 = false;
    this.col_xl_6 = false;
    this.col_sm_6 = true;

  }

  grid2() {
    this.listView = false
    this.col_xl_3 = false;
    this.col_sm_3 = false;

    this.col_xl_2 = false;

    this.col_xl_4 = false;
    this.col_sm_4 = false;

    this.col_xl_6 = true;
    this.col_sm_6 = true;

    this.col_xl_12 = false;
  }

  grid3() {
    this.listView = false
    this.col_xl_3 = false;
    this.col_sm_3 = false;

    this.col_xl_2 = false;
    this.col_xl_4 = true;
    this.col_sm_4 = true;

    this.col_xl_6 = false;
    this.col_sm_6 = false;

    this.col_xl_12 = false;
  }

  grid6() {
    this.listView = false
    this.col_xl_3 = false;
    this.col_sm_3 = false;

    this.col_xl_2 = true;
    this.col_xl_4 = false;
    this.col_sm_4 = false;

    this.col_xl_6 = false;
    this.col_sm_6 = false;

    this.col_xl_12 = false;
  }

  // add to cart service
  public addToCart(product: Products, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  //add to wish list service
  public addToWishlist(product: Products, quantity: number = 1) {
    this.wishService.addToWishList(product, quantity);
  }

  // open single product detail
  openProductDetail(content, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.productService.getProduct(id).subscribe((product) => {
      this.productDetail = product;
    });
  }

  //decrement product quentity
  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity)

  }

  //increment product quentity
  public increment(product: any, quantity: number = +1) {
    this.cartService.updateCartQuantity(product, quantity)
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((product) => {
      this.products = product;
      this.getColors(product);
      this.getTags(product);
    });
  }


}
