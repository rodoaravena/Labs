import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  //For Creating a new task
  createTask(value) {
    return this.db.collection('todo').add({
      task: value,
      completed: false,
      nameToSearch: value.toLowerCase()
    });
  }

  //Display complete list of task
  getTasks() {
    return this.db.collection('todo').snapshotChanges();
  }

  //For deleting particular task
  deleteTask(taskKey) {
    return this.db.collection('todo').doc(taskKey).delete();
  }

  //For updating particular task
  updateTask(taskKey, value) {
    return this.db.collection('todo').doc(taskKey).set(
      {
        task: value.task,
        completed: value.completed,
        nameToSearch: value.nameToSearch
      }
    )
  }

  markAll(action) {
    this.db.collection('todo').get().forEach((item) => {
      return item.docs.map(m => {
        return this.db.doc(`todo/${m.id}`).update({ completed: action });
      });
    });
  }

}
