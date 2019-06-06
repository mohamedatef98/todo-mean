import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService: AuthService, private router: Router){}
  log(f: NgForm){
    this.authService.login(f.value).subscribe(
      res => this.router.navigate(['/todos']),
      err => console.error(err)
    )
  }
}
