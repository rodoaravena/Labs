import { Component, OnInit } from '@angular/core';
import * as data from '../../shared/data/todo/todo';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../shared/services/firebase/todo.service';
import { Router } from '@angular/router';


export interface Task {
  text: string
  completed: boolean
}
@Component({
  selector: 'app-to-do-firebase',
  templateUrl: './to-do-firebase.component.html',
  styleUrls: ['./to-do-firebase.component.scss']
})
export class ToDoFirebaseComponent implements OnInit {

  public text: string;
  public todos: Task[] = data.task;
  public completed: boolean;
  public redBorder: boolean = false;
  public items: Array<any>;
  public taskId: any;
  public visible: boolean
  constructor(private toastrService: ToastrService, private router: Router, private firebaseService: FirebaseService) { }

  //Add new task
  public addTask(text) {
    if (!text) {
      this.redBorder = true;
      return false;
    }
    this.firebaseService.createTask(text)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/to-do-firebase']);
        }
      )
    this.redBorder = false;
  }

  resetFields() {
    this.text = '';
  }

  //For completing your task
  public taskCompleted(todo) {
    todo.task=todo.payload.doc.data().task
    todo.completed=todo.payload.doc.data().completed
    todo.completed=!todo.completed
    todo.nameToSearch = todo.task.toLowerCase();
    todo.completed ? this.toastrService.success(todo.text, "Mark as completed") : this.toastrService.error(todo.text, "Mark as Incompleted")
    this.firebaseService.updateTask(todo.payload.doc.id,todo)
    .then(
    res => {
      this.router.navigate(['/to-do-firebase']);
    }
  )
  }
  
  //For deleting a task
  public taskDeleted(taskid) {
    this.firebaseService.deleteTask(taskid)
      .then(
        res => {
          this.router.navigate(['/to-do-firebase']);
        },
        err => {
        }
      )
  }

  //Mark and unmark all task
  public markAllAction(action) {
    this.firebaseService.markAll(action);
    this.completed = action
    action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted")
  }

  ngOnInit() {
    //Get complete list of task
    this.firebaseService.getTasks()
      .subscribe(result => {
        this.items = result;
      })
  }

}
