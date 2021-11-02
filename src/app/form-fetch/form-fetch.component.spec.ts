import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFetchComponent } from './form-fetch.component';

describe('FormFetchComponent', () => {
  let component: FormFetchComponent;
  let fixture: ComponentFixture<FormFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
