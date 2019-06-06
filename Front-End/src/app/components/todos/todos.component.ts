import { Component, OnInit } from '@angular/core';
import {TodosService} from "./todos.service";
import {Todo} from "./todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<Todo>;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.getTodos();

    this.todosService.todosSubject.subscribe(
      ()=> this.getTodos()
    );
  }

  getTodos(){
    this.todosService.getTodos().subscribe(
      todos => this.todos = todos,
      err => console.error(err)
    );
  }

}
