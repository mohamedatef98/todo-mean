import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.css']
})
export class TodosViewComponent implements OnInit {

  @Input('todos') todos: Array<Todo> = [];

  constructor() { }

  ngOnInit() {
  }

}
