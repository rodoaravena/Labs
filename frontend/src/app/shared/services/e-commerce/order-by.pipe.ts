import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array, val = 'desc') {

    if (!val || val.trim() == "") {
      return array;
    }

    //ascending
    if (val == 'asc') {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item1['id'], item2['id']);
      });
    } else if (val == 'desc') { // desc
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item2['id'], item1['id']);
      });
    } else if (val == 'a-z') { // a-z
      return Array.from(array).sort((a: any, b: any) => {
        if (a['name'] < b['name']) {
          return -1;
        } else if (a['name'] > b['name']) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (val == 'z-a') { // z-a
      return Array.from(array).sort((a: any, b: any) => {
        if (a['name'] > b['name']) {
          return -1;
        } else if (a['name'] < b['name']) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (val == 'low') { // low to high
      return Array.from(array).sort((a: any, b: any) => {
        if (a['price'] < b['price']) {
          return -1;
        } else if (a['price'] > b['price']) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (val == 'high') { // high to low
      return Array.from(array).sort((a: any, b: any) => {
        if (a['price'] > b['price']) {
          return -1;
        } else if (a['price'] < b['price']) {
          return 1;
        } else {
          return 0;
        }
      });
    }

  }

  orderByComparator(a: any, b: any): number {

    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      //Isn't a number so lowercase the string to properly compare
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
    }
    else {
      //Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) return -1;
      if (parseFloat(a) > parseFloat(b)) return 1;
    }

    return 0; //equal each other
  }

}
