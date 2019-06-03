import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShowOneComponent } from './item-show-one.component';

describe('ItemShowOneComponent', () => {
  let component: ItemShowOneComponent;
  let fixture: ComponentFixture<ItemShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
