import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardsComponent } from './user-cards/user-cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: UsersProfileComponent,
        data: {
          title: "Profile",
          breadcrumb: "Profile"
        }
      },
      {
        path: 'edit',
        component: UserEditComponent,
        data: {
          title: "Edit",
          breadcrumb: "Edit"
        }
      },
      {
        path: 'cards',
        component: UserCardsComponent,
        data: {
          title: "Cards",
          breadcrumb: "Cards"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
