import { TestBed } from '@angular/core/testing';

import { ExampleRecipe } from './example-recipe';

describe('ExampleRecipe', () => {
  let service: ExampleRecipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleRecipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
