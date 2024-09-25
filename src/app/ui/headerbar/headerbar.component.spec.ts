import { ComponentFixture, TestBed } from '@angular/core/testing';

import { headerbarComponent } from './headerbar.component';

describe('headerbarComponent', () => {
  let component: headerbarComponent;
  let fixture: ComponentFixture<headerbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [headerbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(headerbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
