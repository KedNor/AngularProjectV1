import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoktailsDetailsComponent } from './coktails-details.component';

describe('CoktailsDetailsComponent', () => {
  let component: CoktailsDetailsComponent;
  let fixture: ComponentFixture<CoktailsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoktailsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoktailsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
