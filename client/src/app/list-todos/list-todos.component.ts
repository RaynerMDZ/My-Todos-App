import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;

  // Fake todos.
  // todos = [
  //   new Todo(1,'Lear to Dance', false, new Date()),
  //   new Todo(2,'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit RD', false, new Date())
  // ];

  constructor(private todosDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
    // this.todosDataService.retrieveAllTodos('in28minutes').subscribe(
    //   response => {
    //     this.todos = response;
    //   }
    // );
    this.refreshTodos();
  }

  // This method refreshes the todos.
  refreshTodos() {
    this.todosDataService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number) {
    this.todosDataService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful`;
        // refreshing todos after deleting one.
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  createTodo() {
    //Goes to todos page.
    this.router.navigate(['todos', -1]);
  }
}

export class Todo {

  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }

}


