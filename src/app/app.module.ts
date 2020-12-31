import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarsComponent } from "./components/cars/cars.component";

import { CarsAddComponent } from "./components/cars/cars-add/cars-add.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { from } from "rxjs";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ShowCarComponent } from "./components/cars/show-car/show-car.component";
import { DatePipe } from "@angular/common";
import { EditCarComponent } from "./components/cars/edit-car/edit-car.component";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsAddComponent,
    ShowCarComponent,
    EditCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
