import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { ContactService } from './contact.service';

@Injectable()
export class EditUserResolver implements Resolve<any> {

  constructor(public contectService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, ) {

    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
      this.contectService.getUser(userId)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    })
  }
}