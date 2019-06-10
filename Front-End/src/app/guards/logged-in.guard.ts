import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate{
  constructor(private tokenService: TokenService) {
  }

  canActivate() {
    const token = this.tokenService.getToken();
    return !! token;
  }
}
