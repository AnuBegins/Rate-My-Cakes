import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
    this.getItems();
   }

   create(newItem: any) {
     return this._http.post('/cakes', newItem);
   }

  getItems() {
    return this._http.get('/cakes');
  }

  getItemById(id: any){
    console.log('Cake ID is: ', id);
    return this._http.get('/cakes/'+id);
  }

  updateItem(item: any) {
    return this._http.put('/cakes/'+item._id, item); // the http response is an Observable; store it in a variable
   }


  deleteItem(item: any) {
    return this._http.delete('/cakes/'+item._id);
  }

  addReview(id:any, review: any) {
    return this._http.put('/cakes/'+id+'/reviews', review);
  }

  deleteReview(id:any, review: any) {
    return this._http.get('/cakes/'+id+'/reviews/'+review._id);
  }

}
