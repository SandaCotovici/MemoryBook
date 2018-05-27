import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCanvasComponent } from './album-canvas.component';

describe('AlbumCanvasComponent', () => {
  let component: AlbumCanvasComponent;
  let fixture: ComponentFixture<AlbumCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
