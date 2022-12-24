import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
})
export class ToDoFormComponent implements OnInit {
  taskName: string = '';

  @Output() triggerAddedTask = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClickOnAdd(taskName: string) {
    this.triggerAddedTask.emit(taskName);
    this.taskName = '';
  }
}
