import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropZoneImgAppComponent } from './drop-zone-img-app.component';

describe('DropZoneImgAppComponent', () => {
  let component: DropZoneImgAppComponent;
  let fixture: ComponentFixture<DropZoneImgAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropZoneImgAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropZoneImgAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
