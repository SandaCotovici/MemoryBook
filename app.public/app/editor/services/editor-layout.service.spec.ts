import { TestBed, inject } from '@angular/core/testing';

import { EditorLayoutService } from './editor-layout.service';

describe('EditorLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorLayoutService]
    });
  });

  it('should be created', inject([EditorLayoutService], (service: EditorLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
