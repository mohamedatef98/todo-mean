import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../todo.model";
import {TodosService} from "../../todos.service";
import {MatDialog} from "@angular/material";
import {EditTodoDialogComponent} from "../edit/edit-todo-dialog.component";

@Component({
  selector: 'app-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input('todo') todo: Todo;

  constructor(private todosService: TodosService, private dialog: MatDialog) { }

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

  editTodo(){
    const dialogRef = this.dialog.open(EditTodoDialogComponent,
      {data: {todo: Object.assign({}, this.todo)}, width: '400px'});
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res)
          this.todosService.updateTodo(res).subscribe(
            ()=>this.todosService.todosSubject.next(),
            err=> console.error(err)
          )
      },
    )
  }

}
