import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../todo.model";
import {TodosService} from "../../todos.service";

@Component({
  selector: 'app-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input('todo') todo: Todo;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  toggleTodo(){
    this.todosService.toggleDoneTodo(this.todo).subscribe(
      () =>  this.todosService.todosSubject.next(),
      err => console.warn(err)
    )
  }

  deleteTodo(){
    this.todosService.deleteTodo(this.todo).subscribe(
      () =>  this.todosService.todosSubject.next(),
      err => console.warn(err)
    )
  }

}
