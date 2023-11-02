import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChucheComponent } from './add-chuche.component';

describe('AddChucheComponent', () => {
  let component: AddChucheComponent;
  let fixture: ComponentFixture<AddChucheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChucheComponent]
    });
    fixture = TestBed.createComponent(AddChucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
