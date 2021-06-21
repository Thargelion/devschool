import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;
  let list: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    list = fixture.nativeElement.querySelector('mat-list');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(list);
  });
});
