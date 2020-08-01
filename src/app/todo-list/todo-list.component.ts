import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  // @Input() filterCategory: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
