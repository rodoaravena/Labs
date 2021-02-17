import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
@Component({
  selector: 'app-ngx-dropzone',
  templateUrl: './ngx-dropzone.component.html',
  styleUrls: ['./ngx-dropzone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDropzoneComponent implements OnInit {

  constructor() { }

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config3: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    acceptedFiles: '.pdf'
  };


  public onUploadInit(args: any): void {  }

  public onUploadError(args: any): void {  }

  public onUploadSuccess(args: any): void {  }

  ngOnInit() {
  }

}
