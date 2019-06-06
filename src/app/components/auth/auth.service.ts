import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {api} from "../../globals";
import {TokenService} from "../../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
    
  }

  login({email, password}) {
    return this.http.post(`${api}/login`, {email, password}).pipe(
      map( (res: {token: string}) => this.tokenService.setToken(res.token) )
    );
  }

  signup({username, email, password}) {
    return this.http.post(`${api}/signup`, {email, password, username});
  }
}
