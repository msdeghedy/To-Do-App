import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoitemComponent } from './to-doitem.component';

describe('ToDoitemComponent', () => {
  let component: ToDoitemComponent;
  let fixture: ComponentFixture<ToDoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
