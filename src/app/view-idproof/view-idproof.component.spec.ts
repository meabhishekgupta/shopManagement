import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIDProofComponent } from './view-idproof.component';

describe('ViewIDProofComponent', () => {
  let component: ViewIDProofComponent;
  let fixture: ComponentFixture<ViewIDProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewIDProofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIDProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
