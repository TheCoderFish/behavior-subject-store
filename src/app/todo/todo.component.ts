import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TaskStoreService } from "../task-store.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  tasks$: Observable<any>;

  constructor(private store: TaskStoreService) {}

  ngOnInit() {
    //subsctibed from store
    this.tasks$ = this.store.tasks$;
  }

  addTask(task: string) {
    this.store.addTask(task);
  }
}
