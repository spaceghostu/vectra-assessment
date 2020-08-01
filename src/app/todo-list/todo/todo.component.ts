import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Todo } from 'src/app/todo.interface';
import { TodoService } from 'src/app/todo.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  itemRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit() {
    this.itemRef = this.db.object(`todos/${this.todo.index}`);
    console.log(this.todo.index);
  }
  handleArchiveButton() {}

  handleDoneButton() {
    this.itemRef.update({ active: true });
  }
}
