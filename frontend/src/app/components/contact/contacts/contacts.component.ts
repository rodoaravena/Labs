import { Component, OnInit, Output } from '@angular/core';
import { ContactService } from '../../../shared/services/firebase/contact.service';
import { Router } from '@angular/router';
import { Options, ChangeContext, PointerType, LabelType } from 'ng5-slider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public searchValue: string = "";
  public items: Array<any>;
  public age_filtered_items: Array<any>;
  public name_filtered_items: Array<any>;
  public user: any;
  public age: any;
  public sidebaron: any;
  public listView: any;

  constructor(private contactService: ContactService, private router: Router,private toastr :ToastrService) { }

  showDelete() {
    this.toastr.error('User Deleted !');
  }

 

  public logText: string = '';
  public min: number;
  public value: number = 10;
  public highValue: number = 50;
  public options: Options = {
    floor: 0,
    ceil: 100,
  };

  onUserChangeStart(changeContext: ChangeContext): void {
    this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): void {
    this.min = changeContext.value;
    this.age = changeContext.value;
    this.rangeChange(this.age);
  }

  searchByName() {
    let value = this.searchValue.toLowerCase();
    this.contactService.searchUsers(value)
      .subscribe(result => {
        this.name_filtered_items = result;
        this.items = this.combineLists(result, this.age_filtered_items);
      })
  }

  rangeChange(event) {
    this.contactService.searchUsersByAge(event)
      .subscribe(result => {
        this.age_filtered_items = result;
        this.items = this.combineLists(result, this.name_filtered_items);
      })
  }

  combineLists(a, b) {
    let result = [];

    a.filter(x => {
      return b.filter(x2 => {
        if (x2.payload.doc.id == x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }

  delete(contactId) {
    this.contactService.deleteUser(contactId)
      .then(
        res => {
          this.router.navigate(['/contact/contacts']);
          this.showDelete();
        },
        err => {
        }
      )
  }

  getData() {
    this.contactService.getUsers()
      .subscribe(result => {
        this.items = result;
        this.age_filtered_items = result;
        this.name_filtered_items = result;
      })
  }
  ngOnInit() {
    this.getData();
  }
}
