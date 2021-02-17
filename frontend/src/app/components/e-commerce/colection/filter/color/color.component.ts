import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorFilter, ProductColor, Products } from '../../../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../../../shared/services/e-commerce/products.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  public activeItem: any = '';
  @Input() colorsFilters: ColorFilter[] = [];
  @Output() colorFilters: EventEmitter<ColorFilter[]> = new EventEmitter<ColorFilter[]>();
  public product: Products;
  @Input() uniqueProductColor: any[];

  constructor(private productService: ProductsService) { }
  // Click to call function 
  public changeColor(colors: ColorFilter) {
    this.activeItem = colors.color
    if (colors.color) {
      this.colorFilters.emit([colors]);
    } else {
      this.colorFilters.emit([]);
    }
  }

  ngOnInit() { }
}
