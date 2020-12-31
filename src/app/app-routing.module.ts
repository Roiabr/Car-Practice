import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarsComponent } from "./components/cars/cars.component";
import { EditCarComponent } from "./components/cars/edit-car/edit-car.component";
import { ShowCarComponent } from "./components/cars/show-car/show-car.component";

const routes: Routes = [
  { path: "", component: CarsComponent },
  { path: "cars/:id", component: ShowCarComponent },
  { path: "edit/:id", component: EditCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
