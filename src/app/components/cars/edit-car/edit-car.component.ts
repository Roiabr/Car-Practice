import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Input, SimpleChanges, OnChanges } from "@angular/core";
import { Car } from "src/app/models/car";
import { Employee } from "src/app/models/Employee";
import { Model } from "src/app/models/model";
import { CarService } from "src/app/services/car.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-car",
  templateUrl: "./edit-car.component.html",
  styleUrls: ["./edit-car.component.css"],
})
export class EditCarComponent implements OnInit, OnChanges {
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedCar: Car;
  employees: Employee[];
  car: Car = new Car();
  models: Model[];

  constructor(private carService: CarService, private _router: Router) {}

  ngOnInit() {
    this.car = history.state.data;
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
    this.carService.editCar(car).subscribe((car: Car) => {
      this.update.emit(true);
    });
    this._router.navigate([""]).then(() => {
      window.location.reload();
    });
  }
}
