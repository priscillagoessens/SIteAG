import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryimageComponent } from './galeryimage.component';

describe('GaleryimageComponent', () => {
  let component: GaleryimageComponent;
  let fixture: ComponentFixture<GaleryimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
