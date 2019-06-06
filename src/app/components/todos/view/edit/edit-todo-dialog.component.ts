import {Component, Input, Inject, ViewChild} from "@angular/core";
import {Todo} from "../../todo.model";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent {
  @Input('todo') todo: Todo;
  @ViewChild('f') f: NgForm;
  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {todo: Todo}){
  }

  close(){
    this.dialogRef.close()
  }

}
