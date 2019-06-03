import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShowAllComponent } from './item-show-all.component';

describe('ItemShowAllComponent', () => {
  let component: ItemShowAllComponent;
  let fixture: ComponentFixture<ItemShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShowAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
