import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionbankrepoComponent } from './questionbankrepo.component';

describe('QuestionbankrepoComponent', () => {
  let component: QuestionbankrepoComponent;
  let fixture: ComponentFixture<QuestionbankrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionbankrepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionbankrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
