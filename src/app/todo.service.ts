import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private db: AngularFireDatabase) {}

  getTodos() {
    return this.db.list<Todo>('todos').valueChanges();
  }

  completeTodo(index) {
    console.log('complete todo');
    this.db.object(`todos/${index}`).update({ active: false });
  }

}
