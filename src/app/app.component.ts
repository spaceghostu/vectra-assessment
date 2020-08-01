import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Observable<Todo[]>;
  filterCategory;
  // @ViewChild('drawer') drawer: ElementRef;

  constructor(service: TodoService) {
    this.todos = service.getTodos();
  }

  setFilter(category) {
    this.filterCategory = category;
    // this.drawer.nativeElement.toggle();
  }
}
