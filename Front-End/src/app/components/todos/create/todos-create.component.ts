import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodosService} from "../todos.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent implements OnInit {

  constructor(private todosService: TodosService){}

  status : 'none' | 'loading' | 'done' = 'none';

  randomTodo: string;

  previewTodos = [
    "Wash my clothes",
    "Fix the oven",
    "Pay my internet bill",
    "Call my aunt",
    "Cut the grass",
    "Download the movie",
    "Buy some milk",
    "Visit my Mom",
    "Paint the fence",
    "Do something awesome",
    "Reach my dreams",
    "Climb the Everest",
    "Travel to space",
    "Enlighten the world",
    "Look Awesome"
  ];

  ngOnInit() {
    this.setRandomTodo();
  }

  getRandomTodo(){
    return this.previewTodos[Math.floor(this.previewTodos.length *  Math.random() )]
  }

  setRandomTodo(){
    const prev = this.randomTodo;
    this.randomTodo = this.getRandomTodo();
    while(prev === this.randomTodo)
      this.randomTodo = this.getRandomTodo();
  }

  handleClick(f: NgForm){
    if(this.status === 'none' && f.valid){
      this.status = 'loading';
      this.todosService.createTodo(f.value).subscribe(
        ()=> {
          this.todosService.todosSubject.next();
          this.status = 'done';
          this.setRandomTodo();
          f.resetForm();
          setTimeout(()=> {
            this.status = 'none';
          }, 1000)
        },
        (err)=> console.error(err)
      );
    }
  }

}
