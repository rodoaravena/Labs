import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './mustMatch';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent implements OnInit {
  public emailForm: FormGroup;
  public form: any;
  constructor(private route: Router, private fb: FormBuilder) {
    this.createEmailForm();
  }

  createEmailForm() {
    this.emailForm = this.fb.group({
      emailAdd: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  ngOnInit() {  }

}
