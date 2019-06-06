import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import { NotificaionsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private tokenService: TokenService, private router: Router, private notificationsService: NotificaionsService){}

  noToken(){
    return !this.tokenService.getToken();
  }

  logout(){
    this.tokenService.removeToken();
    this.router.navigate(['/'])
    this.notificationsService.pushSuccess('Logout!, See you soon!')
  }
}
