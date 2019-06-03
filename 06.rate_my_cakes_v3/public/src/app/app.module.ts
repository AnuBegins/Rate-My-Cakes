import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemShowAllComponent } from './item-show-all/item-show-all.component';
import { ItemShowOneComponent } from './item-show-one/item-show-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreateComponent,
    ItemShowAllComponent,
    ItemShowOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
