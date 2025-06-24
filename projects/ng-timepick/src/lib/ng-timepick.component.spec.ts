import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimepickComponent } from './ng-timepick.component';

describe('NgTimepickComponent', () => {
  let component: NgTimepickComponent;
  let fixture: ComponentFixture<NgTimepickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTimepickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTimepickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
