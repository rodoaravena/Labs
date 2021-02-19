import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BirthDateComponent implements OnInit {
  public birthdateForm: FormGroup;
  public submitted = false;
  public allData = FormData;
  public form: any;

  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.birthdateForm = this.fb.group({
      dd: [null, Validators.required],
      mm: [null, Validators.required],
      yyyy: [null, Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.birthdateForm.valid) {
      return false;
    }
    return true;
  }

  success() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your all steps done!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnInit() {  }
}
