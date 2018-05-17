import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAlbumTypeComponent } from './select-album-type.component';

describe('SelectAlbumTypeComponent', () => {
  let component: SelectAlbumTypeComponent;
  let fixture: ComponentFixture<SelectAlbumTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAlbumTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAlbumTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
