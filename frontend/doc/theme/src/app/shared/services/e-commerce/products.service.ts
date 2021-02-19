import { Injectable } from '@angular/core';
import { Products, ColorFilter, ProductColor } from '../../../shared/model/e-commerce/product.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public currency: string = 'USD';
  private _http = null;

  constructor(private http: HttpClient) {
    this._http = http;
  }

  private products(): Observable<Products[]> {
    return this.http.get('assets/data/ecommerce/products.json').map((res: any) => {
      return res;
    });
  }

  public getProducts(): Observable<Products[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Products> {

    return this.products().pipe(map(items => {
      return items.find((item: Products) => {
        return item.id === id;
      });
    }));
  }


  public getProductByColor(color: ColorFilter[]): Observable<Products[]> {
    return this.products().pipe(map(items =>
      items.filter((item: Products) => {
        if (color == item.colors) {
          return item.colors
        }
        else {
          return item;
        }
      })
    ));
  }

  public checkDuplicateInObject(tag, Products) {
    var seenDuplicate = false,
      testObject = {};

    Products.map(function (item) {
      var itemPropertyName = item[tag];
      if (itemPropertyName in testObject) {
        testObject[itemPropertyName].duplicate = true;
        item.duplicate = true;
        seenDuplicate = true;
      }
      else {
        testObject[itemPropertyName] = item;
        delete item.duplicate;
      }
    });

    return seenDuplicate;
  }

  public getProductByCategory(category: string): Observable<Products[]> {
    return this.products().pipe(map(items =>
      items.filter((item: Products) => {
        if (category == 'all') {
          return item
        }
        else {
          return item.category === category;
        }
      })
    ));
  }
  private tag(): Observable<Products[]> {
    return this.http.get('assets/data/products.json').map((res: any) => {
      return res;
    });
  }

  public getTags(): Observable<Products[]> {
    return this.products();
  }
}