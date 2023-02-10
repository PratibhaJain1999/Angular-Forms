import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFormsComponent } from './tr-forms.component';

describe('TrFormsComponent', () => {
  let component: TrFormsComponent;
  let fixture: ComponentFixture<TrFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
