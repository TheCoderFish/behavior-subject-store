import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable()
export class TaskHttpService {

  constructor() { }

  //mock api returning an observable response
  addTask(task){
    return of(task);
  }

}