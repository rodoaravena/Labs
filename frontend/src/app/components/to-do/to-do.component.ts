import { Component, OnInit } from '@angular/core';
import * as data from '../../shared/data/todo/todo';
import { ToastrService } from 'ngx-toastr';

export interface Task {
  text: string
  completed: boolean
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  public text: string;
  public todos: Task[] = data.task;
  public completed: boolean;
  public red_border: boolean = false;
  public visible: boolean

  constructor(private toastrService: ToastrService) { }

  ngOnInit() { }

  public addTask(text) {
    if (!text) {
      this.red_border = true;
      return false;
    }
    let task = { text: text, completed: false }
    this.todos.push(task);
    this.text = '';
    this.red_border = false;
  }

  public taskCompleted(task) {
    task.completed = !task.completed
    task.completed ? this.toastrService.success(task.text, "Mark as completed") : this.toastrService.error(task.text, "Mark as Incompleted")
  }

  public taskDeleted(index) {
    this.todos.splice(index, 1);
  }

  public markAllAction(action) {
    this.todos.filter(task => {
      task.completed = action
    })
    this.completed = action
    action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted")
  }
}
