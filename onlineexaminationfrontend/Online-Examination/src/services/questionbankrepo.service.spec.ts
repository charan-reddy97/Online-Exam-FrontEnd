import { TestBed } from '@angular/core/testing';

import { QuestionbankrepoService } from './questionbankrepo.service';

describe('QuestionbankrepoService', () => {
  let service: QuestionbankrepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionbankrepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
