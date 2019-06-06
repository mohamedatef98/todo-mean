import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/layout/home/home.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import { WrongPageComponent } from './components/layout/wrong-page/wrong-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'todos', canActivate: [LoggedInGuard], loadChildren: () => import('./components/todos/todos.module').then(m => m.TodosModule)},
  {path: '**', component: WrongPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
