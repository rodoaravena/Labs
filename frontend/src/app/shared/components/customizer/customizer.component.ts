import { Component, OnInit } from '@angular/core';
import { CustomizerService } from '../../services/customizer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  public customizer: any
  public sidebarSetting: any = 'color'
  public layoutType: string = 'ltr'
  public sidebarType: string = 'default'
  public data: any;

  constructor(public customize: CustomizerService,
    private modalService: NgbModal,
    private toastrService: ToastrService) { 
      this.customize.data.color.layout_version = localStorage.getItem("layoutVersion")
      this.customize.data.color.color = localStorage.getItem("color")
      this.customize.data.color.primary_color = localStorage.getItem("primary_color")
      this.customize.data.color.secondary_color = localStorage.getItem("secondary_color")
    }

  // Open customizer
  openCustomizerSetting(val) {
    this.customizer = val
  }

  // Sidebar customizer Settings
  customizerSetting(val) {
    this.sidebarSetting = val
  }

  // Customize Layout Type
  customizeLayoutType(val) {
    this.customize.setLayoutType(val)
    this.layoutType = val
  }

  // Customize Sidebar Type
  customizeSidebarType(val) {
    if (val == 'default') {
      this.customize.data.settings.sidebar.type = 'default';
      this.customize.data.settings.sidebar.body_type = 'default';
    } else if (val == 'compact') {
      this.customize.data.settings.sidebar.type = 'compact-wrapper';
      this.customize.data.settings.sidebar.body_type = 'sidebar-icon';
    } else if (val == 'compact-icon') {
      this.customize.data.settings.sidebar.type = 'compact-page';
      this.customize.data.settings.sidebar.body_type = 'sidebar-hover';
    }
    this.sidebarType = val
  }

  // Customize Sidebar Setting
  customizeSidebarSetting(val) {
    this.customize.data.settings.sidebar_setting = val
  }

  // Customize Sidebar Backround
  customizeSidebarBackround(val) {
    this.customize.data.settings.sidebar_backround = val
  }

  // Customize Mix Layout
  customizeMixLayout(val) {
    this.customize.setLayout(val)
  }

  // Customize Light Color
  customizeLightColorScheme(val) {
    this.customize.setColorLightScheme(val)
  }

  // Customize Dark Color
  customizeDarkColorScheme(val) {
    this.customize.setColorDarkScheme(val)
  }

  //Display modal for copy config
  copyConfig(popup, data) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
    data = this.customize.data
  }

  //Copy config
  copyText(data) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }
  ngOnInit() { }


}
