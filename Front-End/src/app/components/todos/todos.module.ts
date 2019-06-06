import {NgModule} from "@angular/core";
import {TodosComponent} from "./todos.component";
import {TodosCreateComponent} from "./create/todos-create.component";
import {TodosItemComponent} from "./item/todos-item.component";
import {TodosViewComponent} from "./view/todos-view.component";
import {MaterialModule} from "../../material.module";
import {TodosRoutingModule} from "./todos-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TodosComponent,
    TodosCreateComponent,
    TodosItemComponent,
    TodosViewComponent
  ],
  imports: [
    MaterialModule,
    TodosRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class TodosModule{
}
