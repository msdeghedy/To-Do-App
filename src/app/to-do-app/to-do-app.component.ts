import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css'],
})
export class ToDoAppComponent implements OnInit {
  toDoItems: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}

  onItemAdded(taskName: string) {
    this.toDoItems.push(taskName);
  }
}
