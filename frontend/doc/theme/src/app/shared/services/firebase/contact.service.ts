import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(public db: AngularFirestore) { }

  createUser(value, avatar) {
    return this.db.collection('usersContact').add({
      age: parseInt(value.age),
      mobile: parseInt(value.mobile),
      name: value.name,
      surname: value.surname,
      avatar: avatar ? avatar : 'assets/images/user/user.png',
      nameToSearch: value.name.toLowerCase()
    });
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('usersContact').doc(userKey).set(value);
  }

  searchUsers(searchValue) {
    return this.db.collection('usersContact', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value) {
    return this.db.collection('usersContact', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  getUser(userKey) {
    return this.db.collection('usersContact').doc(userKey).snapshotChanges();
  }
  getUsers() {
    return this.db.collection('usersContact').snapshotChanges();
  }

  deleteUser(contactKey) {
    return this.db.collection('usersContact').doc(contactKey).delete();
  }
}
