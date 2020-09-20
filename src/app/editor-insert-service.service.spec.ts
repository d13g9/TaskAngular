import { TestBed } from '@angular/core/testing';

import { EditorInsertServiceService } from './editor-insert-service.service';

describe('EditorInsertServiceService', () => {
  let service: EditorInsertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorInsertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
