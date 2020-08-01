import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Observable<Todo[]>;
  filterCategory;
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(service: TodoService) {
    this.todos = service.getTodos();
  }

  setFilter(category) {
    this.filterCategory = category;
    this.drawer.toggle();
  }
}
