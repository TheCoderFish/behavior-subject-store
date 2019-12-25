import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoComponent } from './todo/todo.component';
import { TaskStoreService } from './task-store.service';
import { TaskHttpService } from './task-http.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TodoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TaskStoreService, TaskHttpService]
})
export class AppModule { }
