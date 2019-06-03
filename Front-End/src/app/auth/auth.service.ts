import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
class AuthService {

  constructor(private http: HttpClient) {
    
  }

  user;

  login(email: string, password: string) {
    return this.http.post();
  }

  signup(name: string, email: string, password: string) {
    return this.http.post();
  }
}
