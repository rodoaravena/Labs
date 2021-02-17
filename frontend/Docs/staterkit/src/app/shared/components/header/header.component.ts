
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems: Menu[];
  public items: Menu[];
  public openNav: boolean = false
  public right_sidebar: boolean = false
  public text: string

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService) {  }

  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }

  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }

}
