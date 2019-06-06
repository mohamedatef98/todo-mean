import {NgModule} from "@angular/core";
import {TodosComponent} from "./todos.component";
import {TodosCreateComponent} from "./create/todos-create.component";
import {TodosViewComponent} from "./view/todos-view.component";
import {TodosItemComponent} from "./view/item/todos-item.component";
import {MaterialModule} from "../../material.module";
import {TodosRoutingModule} from "./todos-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {EditTodoDialogComponent} from "./view/edit/edit-todo-dialog.component";

@NgModule({
  declarations: [
    TodosComponent,
    TodosCreateComponent,
    TodosViewComponent,
    TodosItemComponent,
    EditTodoDialogComponent
  ],
  imports: [
    MaterialModule,
    TodosRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    EditTodoDialogComponent
  ]
})
export class TodosModule{
}
