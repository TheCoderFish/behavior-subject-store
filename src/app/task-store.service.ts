import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TaskHttpService } from "./task-http.service";

@Injectable()
export class TaskStoreService {
  //BehaviorSubject acting as a store
  private _taskStore: BehaviorSubject<any[]>;
  public tasks$: Observable<any>;

  constructor(private taskService: TaskHttpService) {
    this._taskStore = new BehaviorSubject<any>([]);
    this.tasks$ = this._taskStore.asObservable();
  }

  //setter to push new data to subscribers
  private set tasks(tasks) {
    this._taskStore.next(tasks);
  }

  //returns the last emitted value form the subject
  private get tasks() {
    return this._taskStore.getValue();
  }


  //adds the new task to store after success response from server
  addTask(task) {
    //call to mock server
    this.taskService.addTask(task).subscribe(task => {
      this.tasks = [...this.tasks, task];
    });
  }
}
