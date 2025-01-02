import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDProofComponent } from './idproof.component';

describe('IDProofComponent', () => {
  let component: IDProofComponent;
  let fixture: ComponentFixture<IDProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IDProofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
