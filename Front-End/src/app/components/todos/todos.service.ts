import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {api} from "../../globals";
import {TokenService} from "../../services/token.service";
import {Subject} from "rxjs";
import {map} from 'rxjs/operators'
import {Todo} from "./todo.model";

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

  todosSubject = new Subject();

  getTodos(){
    return this.http.get<Array<Todo>>(`${api}/todos`, this.httpOptions);
  }
  
  deleteTodo({_id}){
    return this.http.delete(`${api}/todos/${_id}`, this.httpOptions);
  }

  createTodo({description}){
    return this.http.post(`${api}/todos`, {description}, this.httpOptions);
  }

  updateTodo({_id, description}){
    return this.http.put(`${api}/todos/${_id}/description`, {description}, this.httpOptions);
  }

  toggleDoneTodo({_id}){
    return this.http.put(`${api}/todos/${_id}/toggleDone`, {}, this.httpOptions);
  }
}
