import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuestionbankComponent } from './manage-questionbank.component';

describe('ManageQuestionbankComponent', () => {
  let component: ManageQuestionbankComponent;
  let fixture: ComponentFixture<ManageQuestionbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageQuestionbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
