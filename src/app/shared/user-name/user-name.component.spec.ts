import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserNameComponent } from './user-name.component';

describe('UserNameComponent', () => {
  let component: UserNameComponent;
  let fixture: ComponentFixture<UserNameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
