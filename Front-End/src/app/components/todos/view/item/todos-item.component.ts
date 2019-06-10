import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../todo.model";
import {TodosService} from "../../todos.service";
import {MatDialog} from "@angular/material";
import {EditTodoDialogComponent} from "../edit/edit-todo-dialog.component";
import { NotificaionsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input('todo') todo: Todo;

  constructor(private todosService: TodosService, private dialog: MatDialog, private notificationsService: NotificaionsService) { }

  ngOnInit() {
  }

  toggleTodo(){
    this.todosService.toggleDoneTodo(this.todo).subscribe(
      () =>  {
        this.todosService.todosSubject.next()
      },
      err => this.notificationsService.pushError(err.error.message, "Todo wasn't updated")
    )
  }

  deleteTodo(){
    this.todosService.deleteTodo(this.todo).subscribe(
      () =>  {
        this.todosService.todosSubject.next()
        this.notificationsService.pushInfo('Todo Deleted')
      },
      err => this.notificationsService.pushError(err.error.message, "Todo wasn't deleted")
    )
  }

  editTodo(){
    const dialogRef = this.dialog.open(EditTodoDialogComponent,
      {data: {todo: Object.assign({}, this.todo)}, width: '400px'});
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res)
          this.todosService.updateTodo(res).subscribe(
            ()=>{
              this.todosService.todosSubject.next()
              this.notificationsService.pushInfo('Todo Updated')
            },
            err=> this.notificationsService.pushError(err.error.message, "Todo wasn't updated")
          )
      },
    )
  }

}
