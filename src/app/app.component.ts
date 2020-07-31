import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Todo } from './todo.interface';
import { groupBy, mergeMap, toArray, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Observable<Todo[]>;
  todosGrouped: any;
  constructor(db: AngularFireDatabase) {
    this.todos = db.list<Todo>('todos').valueChanges();

    // this.todos.subscribe(
    //   (res) => console.log('HTTP response', res),
    //   (err) => console.log('HTTP Error', err),
    //   () => console.log('HTTP request completed.')
    // );


    this.todosGrouped = this.todos.pipe(
      map(todos =>
        of(...todos).pipe(
          groupBy(p => p.isComplete),
          mergeMap(group => group.pipe(toArray()))
        )
      ),
      mergeMap(group => group.pipe(toArray()))
    );
  }
}
