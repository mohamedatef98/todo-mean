import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient){}

  getTodos(){

  }
  
  deleteTodo(){

  }

  createTodo(){

  }
}
