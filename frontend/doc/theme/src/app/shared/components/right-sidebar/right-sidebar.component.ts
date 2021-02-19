import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../shared/model/chat.model';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  public users: ChatUsers[] = []
  public searchUsers: ChatUsers[] = []
  public notFound: boolean = false
  public searchText: string

  constructor(private chatService: ChatService) {
    this.chatService.getUsers().subscribe(users => {
      this.searchUsers = users
      this.users = users
    })
  }

  searchTerm(term: any) {
    if (!term) return this.searchUsers = this.users
    term = term.toLowerCase();
    let user = []
    this.users.filter(users => {
      if (users.name.toLowerCase().includes(term)) {
        user.push(users)
      }
    })
    this.checkSearchResultEmpty(user)
    this.searchUsers = user
  }

  checkSearchResultEmpty(user) {
    if (!user.length)
      this.notFound = true;
    else
      this.notFound = false;
  }

  ngOnInit() { }

}
