import { Injectable } from '@angular/core';
import { ConfigDB } from '../../shared/config/config';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {

  constructor() {
    document.body.className = this.data.color.mix_layout;
    document.body.setAttribute("main-theme-layout", this.data.settings.layout_type);
    document.getElementsByTagName('html')[0].setAttribute('dir', this.data.settings.layout_type);
    var color = this.data.color.color;
    var layoutVersion = this.data.color.layout_version;
    if (color) {
      this.createStyle(color);
      if (layoutVersion)
        document.body.className = layoutVersion;
    }
  }

  // Configration Layout
  public data = ConfigDB.data

  // Create style sheet append in head
  createStyle(color) {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = window.location.origin + "assets/css/" + color + ".css";
    head.appendChild(link);
  }

}
