import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {api} from "../../globals";
import {TokenService} from "../../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Authorization': this.tokenService.getToken()
    })
  };

  constructor(private http: HttpClient, private tokenService: TokenService){}

  getTodos(){
    this.http.get(`${api}/todos`, this.httpOptions);
  }
  
  deleteTodo({id}){
    this.http.delete(`${api}/todos/${id}`, this.httpOptions);
  }

  createTodo({description}){
    this.http.post(`${api}/todos`, {description}, this.httpOptions);
  }

  updateTodo({id, description}){
    this.http.put(`${api}/todos/${id}/description`, {description}, this.httpOptions);
  }

  toggleDoneTodo({id, prevDone}){
    this.http.put(`${api}/todos/${id}/toggleDone`,{done: !prevDone}, this.httpOptions);
  }
}
