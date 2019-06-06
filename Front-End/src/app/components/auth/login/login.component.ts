import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import { NotificaionsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService: AuthService, private router: Router, private notificationsService: NotificaionsService){}
  log(f: NgForm){
    this.authService.login(f.value).subscribe(
      res => {
        this.router.navigate(['/todos']);
        this.notificationsService.pushSuccess('Welcome')
      },
      err => this.notificationsService.pushError(err.error.message, "Cannot Login")
    )
  }
}
