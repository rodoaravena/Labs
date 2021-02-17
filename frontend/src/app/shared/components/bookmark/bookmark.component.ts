import { Component, OnInit } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  
  public menuItems  : Menu[];
  public items  : Menu[];
  public text  : string
  public open  : boolean = false;
  public searchResult  : boolean = false;
  public searchResultEmpty  : boolean = false;
  public bookmarkItems : any[] = [];

  constructor(public navServices: NavService) {  }

  ngOnInit() {
  	this.navServices.items.subscribe(menuItems => {
      this.items = menuItems 
      this.items.filter(items => {
        if(items.bookmark){
          this.bookmarkItems.push(items)
        }
      })
    });
  }

  openBookmarkSearch() {
    this.open = !this.open
    this.removeFix();
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) {
     this.open = false
     return this.menuItems = [];
    }  
    let items = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
        if(menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link'){
          items.push(menuItems);
        }
        if(!menuItems.children) return false
          menuItems.children.filter(subItems => {
            if(subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
              subItems.icon = menuItems.icon
              items.push(subItems);
            }
            if(!subItems.children) return false
            subItems.children.filter(suSubItems => {
              if(suSubItems.title.toLowerCase().includes(term)) {
                suSubItems.icon = menuItems.icon
                items.push(suSubItems);
              }
            })
        })
          this.checkSearchResultEmpty(items)
          this.menuItems = items
    });
  }

  checkSearchResultEmpty(items) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.getElementById("canvas-bookmark").classList.add("offcanvas-bookmark");
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
  }

  addToBookmark(items) {
    const index = this.bookmarkItems.indexOf(items);
    if(index === -1 && !items.bookmark){
      items.bookmark = true;
      this.bookmarkItems.push(items)
      this.text = "";
    } else {
      this.bookmarkItems.splice(index, 1);
      items.bookmark = false;
    }
  }

}
