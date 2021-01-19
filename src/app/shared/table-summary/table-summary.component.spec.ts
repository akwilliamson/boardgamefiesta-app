import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableSummaryComponent } from './table-summary.component';

describe('TableSummaryComponent', () => {
  let component: TableSummaryComponent;
  let fixture: ComponentFixture<TableSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
