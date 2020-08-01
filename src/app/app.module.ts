import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { TodoComponent } from './todo-list/todo/todo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SortByPipe } from './sort.pipe';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoComponent, SortByPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatSidenavModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
