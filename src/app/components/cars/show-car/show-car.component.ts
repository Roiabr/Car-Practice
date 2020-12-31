import { Component, OnInit } from "@angular/core";
import { Input, SimpleChanges, OnChanges } from "@angular/core";
import { Car } from "src/app/models/car";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-show-car",
  templateUrl: "./show-car.component.html",
  styleUrls: ["./show-car.component.css"],
})
export class ShowCarComponent implements OnInit, OnChanges {
  @Input() selectedCar: Car;

  car: Car = new Car();

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.car = history.state.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.car = this.selectedCar;
  }
}
