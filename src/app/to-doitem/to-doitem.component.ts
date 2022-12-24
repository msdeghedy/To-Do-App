import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-doitem',
  templateUrl: './to-doitem.component.html',
})
export class ToDoitemComponent implements OnInit {
  @Input() taskName: string = '';
  clicked: boolean = false;
  deleteClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClickCompleted() {
    this.clicked = true;
  }

  onClickDeleted() {
    this.deleteClicked = true;
  }
}
