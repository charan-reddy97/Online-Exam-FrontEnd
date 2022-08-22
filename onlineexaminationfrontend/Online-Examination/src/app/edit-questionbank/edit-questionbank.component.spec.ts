import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionbankComponent } from './edit-questionbank.component';

describe('EditQuestionbankComponent', () => {
  let component: EditQuestionbankComponent;
  let fixture: ComponentFixture<EditQuestionbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuestionbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
