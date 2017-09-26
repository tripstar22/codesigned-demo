import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailShellComponent } from './event-detail-shell.component';

describe('EventDetailShellComponent', () => {
  let component: EventDetailShellComponent;
  let fixture: ComponentFixture<EventDetailShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
