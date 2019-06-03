import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-item-show-all',
  templateUrl: './item-show-all.component.html',
  styleUrls: ['./item-show-all.component.css']
})
export class ItemShowAllComponent implements OnInit {
  itemReview: any;

  constructor(private _httpService: HttpService) { }

  @Input() item: any; // The @Input() decorator indicates that the item attribute is being supplied by the parent component. Now, 'item' may be used in the template like any other attribute.
  @Output() itemDetailEventEmitter = new EventEmitter();

  @Output() itemUpdateEventEmitter = new EventEmitter();
  @Output() deleteEventEmitter = new EventEmitter();


  ngOnInit() {
    this.itemReview = {rating: 0, comment: "", id:''};
  }

  // ------------------------- //
  displayItemDetail() {
    console.log('image clicked');
    this.triggerEvent();
  }

  triggerEvent() {
    console.log('triggerEvent fncn invoked');
    this.itemDetailEventEmitter.emit(this.item);
  }


  // ------ DELETE item ----- //

  deleteItemBtnClicked(item) {
    this.deleteItem(item);
  }

  deleteItem(item) {
    let tempObservable = this._httpService.deleteItem(item);
    tempObservable.subscribe(data => {
      if (data['error']) {
        console.log(data['error']);
      } else {
          console.log('Review delete status :', data['status']);
      };
      this.deleteEventEmitter.emit();
    });
  }


  // --------Adding Reviews-------- //
  submitReviewBtnClicked(id) {
   // this.itemReview.id = id;
    this.addReview(id);
  }

  addReview(id) {
    console.log('Item: ',id);
    console.log('Review: ', this.itemReview);

    let observable = this._httpService.addReview(id, this.itemReview);
    observable.subscribe(data => {
      console.log('Something received');
      //  this.getItem(id);
      this.onItemUpdate(id);
    });
    this.itemReview = {rating: 0, comment: "", id:''};
  }


  onItemUpdate(id){
    console.log('onItemUpdate fncn invoked');
    this.itemUpdateEventEmitter.emit(id);
  }


}


