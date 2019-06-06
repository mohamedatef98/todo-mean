import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent implements OnInit {

  todo = "";

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
  constructor() { }

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

  onChange(e){
    this.setRandomTodo();
    this.todo = String(e.value ? e.value : '');
  }

  handleClick(){
    if(this.status === 'none')
      this.status = 'loading';
      setTimeout(()=>{
        this.status = 'done';
        setTimeout(()=> {
          this.status = 'none';
        }, 1000)
      }, 1000)
  }

}
