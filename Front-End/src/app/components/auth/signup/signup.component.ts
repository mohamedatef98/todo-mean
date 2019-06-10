import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import { NotificaionsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  constructor(private authService: AuthService, private router: Router, private notificationsService: NotificaionsService){}
  log(f: NgForm){
    this.authService.signup(f.value).subscribe(
      res => {
        this.authService.login(f.value).subscribe(
          res => {
            this.router.navigate(['/todos'])
            this.notificationsService.pushSuccess("User Created, Welcome!")
          }
        )
      },
      err => this.notificationsService.pushError(err.error.message, "User wasn't created")
    )
  }
}
