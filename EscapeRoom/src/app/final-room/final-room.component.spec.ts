import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalRoomComponent } from './final-room.component';

describe('FinalRoomComponent', () => {
  let component: FinalRoomComponent;
  let fixture: ComponentFixture<FinalRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
