import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  newItem: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.clearFields();
  }

  clearFields() {
    this.newItem = {
      cakeName: "",
      bakerName: "",
      imageURL: "",
      reviews: []
    }
    return this.newItem;
  }

  submitBtnClicked(){
    let tempObservable = this._httpService.create(this.newItem);
    tempObservable.subscribe(response => {
      this.triggerEvent();
    });
    this.clearFields();
  }

  // the @Output() decorator defines an event we want to expose to the parent component
  // EventEmitter is used to invoke the event defined using the @Output() decorator
  @Output() createEventEmitter = new EventEmitter();
  triggerEvent() {
    this.createEventEmitter.emit();
  }



}
