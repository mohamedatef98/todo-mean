import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  constructor(private authService: AuthService, private router: Router){}
  log(f: NgForm){
    this.authService.signup(f.value).subscribe(
      res => {
        this.authService.login(f.value).subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/todos'])
          }
        )
      },
      err => console.error(err)
    )
  }
}
