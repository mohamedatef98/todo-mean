import {NgModule} from "@angular/core";
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";


@NgModule({
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule{

}
