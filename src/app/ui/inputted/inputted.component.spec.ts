import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtedComponent } from './inputted.component';

describe('InputtedComponent', () => {
  let component: InputtedComponent;
  let fixture: ComponentFixture<InputtedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputtedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputtedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
