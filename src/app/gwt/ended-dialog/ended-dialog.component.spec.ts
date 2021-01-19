import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EndedDialogComponent } from './ended-dialog.component';

describe('EndedDialogComponent', () => {
  let component: EndedDialogComponent;
  let fixture: ComponentFixture<EndedDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EndedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
