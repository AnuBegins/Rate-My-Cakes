import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Make America Cake Again';
  allItems: any;
  itemToShow: any;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.getItemsFromService();
  }


  getItemsFromService() {
    let tempObservable = this._httpService.getItems();
    tempObservable.subscribe( data => {
      console.log('Fetched all items.', data['data']);
      this.allItems = data['data'];
    })
  }

  getItemFromService(event) {
    let tempObservable = this._httpService.getItemById(event);
    tempObservable.subscribe( item => {
    //  console.log('Getting item...', item);
      this.dataFromChild(item['data']);
     // console.log('this.itemToShow = ', this.itemToShow);
    })
  }

  dataFromChild(data){
  //  console.log('data from child: ', data);
    this.itemToShow = data;
  //  console.log('itemToShow: ', this.itemToShow)
  }

}
