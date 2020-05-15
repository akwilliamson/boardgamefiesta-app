import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBuildingsComponent } from './player-buildings.component';

describe('PlayerBuildingsComponent', () => {
  let component: PlayerBuildingsComponent;
  let fixture: ComponentFixture<PlayerBuildingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBuildingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});