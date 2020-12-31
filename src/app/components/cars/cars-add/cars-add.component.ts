import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { Car } from "src/app/models/car";
import { Employee } from "src/app/models/Employee";
import { Model } from "src/app/models/model";
import { CarService } from "src/app/services/car.service";

import { isNullOrUndefined } from "util";

@Component({
  selector: "app-cars-add",
  templateUrl: "./cars-add.component.html",
  styleUrls: ["./cars-add.component.css"],
})
export class CarsAddComponent implements OnInit, OnChanges {
  // @ts-ignore
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedCar: Car;
  employees: Employee[];
  car: Car = new Car();
  models: Model[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
      console.log(employees);
    });
    this.carService.getModel().subscribe((models: Model[]) => {
      this.models = models;
      console.log(models);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.car = this.selectedCar;
  }

  processForm(car: Car): void {
    this.carService.addCar(car).subscribe((car: Car) => {
      this.update.emit(true);
    });
  }
}
