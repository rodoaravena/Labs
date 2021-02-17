import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from '../../shared/services/firebase/edit-user.resolver';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new-user',
        component: NewUserComponent,
        data: {
          title: "New User",
          breadcrumb: "New User"
        }
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        data: {
          title: "Contact",
          breadcrumb: "Contact"
        }
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        resolve: {
          data: EditUserResolver
        },
        data: {
          title: "Edit User",
          breadcrumb: "Edit User"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
