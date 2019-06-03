import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-item-show-one',
  templateUrl: './item-show-one.component.html',
  styleUrls: ['./item-show-one.component.css']
})
export class ItemShowOneComponent implements OnInit {

  @Input() itemToShow: any;

  averageRating: any;
  itemId: String = '';
  documentToDelete: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // this.itemId = this.itemToShow._id;
    // this.getAverageRating(this.itemId);
   this.itemToShow.averageRating = '';
  }

  getAverageRating(id){
    let observable = this._httpService.getItemById(id);
    observable.subscribe(data => {
      this.itemToShow = data['data'];

      var avg;
      var sum = 0;
      let numReviews = this.itemToShow.reviews.length;
      for (var i = 0; i < numReviews; i++) {
        sum = sum + this.itemToShow.reviews[i].rating;
      }
      console.log('sum is ',sum);
      avg = (sum/numReviews).toFixed(2);
      console.log('Avg rating is', avg);

      this.itemToShow.averageRating = avg;

    });
  }




  /////////////////// Delete a review by review identifier //////////////////
  onReviewDelete(review) {
    console.log('review object to delete: ', review);
    console.log(`item id is ${this.itemToShow._id} | review_id is ${review._id}`);

    let tempObservable = this._httpService.deleteReview(this.itemToShow._id, review);
    tempObservable.subscribe(data => {
      if (data['error']) {
        console.log(data['error']);
 //       this.error = data['error']; // this will be displayed in the component html
      } else {
          console.log('Review delete status :', data['status']);
      }
      this.getAverageRating(this.itemToShow._id);
    });
  }

}
