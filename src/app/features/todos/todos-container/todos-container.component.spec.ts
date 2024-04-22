import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosContainerComponent } from './todos-container.component';

describe('TodosContainerComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
