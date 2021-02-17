import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngx-wizard',
  templateUrl: './ngx-wizard.component.html',
  styleUrls: ['./ngx-wizard.component.scss']
})
export class NgxWizardComponent implements OnInit {

  @Input() formData;
  title = 'Wizard Three';
  constructor() { }

  ngOnInit() {
  }

}
