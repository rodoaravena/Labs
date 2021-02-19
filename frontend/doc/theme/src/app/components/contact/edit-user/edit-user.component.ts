import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ContactService } from '../../../shared/services/firebase/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public contactForm: FormGroup;
  public errorMessage: any;
  public url: any;
  public item: any;
  public avatar: any;
  public sidebaron: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private contactService: ContactService,private toastr :ToastrService) {}

  createForm() {
    this.contactForm = this.fb.group({
      name: [this.item.name, Validators.required],
      surname: [this.item.surname, Validators.required],
      mobile: [this.item.mobile, Validators.required],
      age: [this.item.age, Validators.required]
    });
  }

  save(value) {
    value.avatar = this.avatar;
    value.age = Number(value.age);
    this.contactService.updateUser(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['/contact/contacts']);
          this.showEdit();
        }
      )
  }

  showEdit(){
    this.toastr.success('User Updated!');
  }

  //FileUpload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.avatar = reader.result;
    }
  }

  cancel() {
    this.router.navigate(['/contact/contacts']);
  }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.avatar = data.payload.data().avatar;
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

}
