import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAndUpdateTaskComponentComponent } from './insert-and-update-task-component.component';

describe('InsertAndUpdateTaskComponentComponent', () => {
  let component: InsertAndUpdateTaskComponentComponent;
  let fixture: ComponentFixture<InsertAndUpdateTaskComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAndUpdateTaskComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAndUpdateTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
