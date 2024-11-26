import { TestBed } from '@angular/core/testing';

import { SubirImagenService } from './subir-imagen.service';

describe('SubirImagenService', () => {
  let service: SubirImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
