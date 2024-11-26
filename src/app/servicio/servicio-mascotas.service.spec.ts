import { TestBed } from '@angular/core/testing';

import { ServicioMascotasService } from './servicio-mascotas.service';

describe('ServicioMascotasService', () => {
  let service: ServicioMascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
