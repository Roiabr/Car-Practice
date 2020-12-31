import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Car } from "../../models/car";
import { CarService } from "../../../app/services/car.service";
import { Router } from "@angular/router";

import { DatePipe } from "@angular/common";

@Component({
  selector: "app-cars",
  template: `<app-show-car [selectedCar]="selectedCar"></app-show-car>`,
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"],
})
export class CarsComponent implements OnInit {
  @Output() carEvent = new EventEmitter<Car>();
  cars: Car[];
  selectedCar: Car;
  searchText;

  constructor(
    private carService: CarService,
    private _router: Router,
    public datePipe: DatePipe
  ) {
    this.selectedCar = new Car();
  }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }
  editCar(carId: number) {
    this.selectedCar = this.cars.find((e: Car) => e.id === carId);
    // console.log(carId);
    // var x = this.datePipe.transform(this.selectedCar.fix_date, "yyyy-MM-dd");
    // console.log(x);
    // this.selectedCar.fix_date = new Date(x);
    // console.log(this.selectedCar.fix_date);

    this._router.navigate(["edit/", carId], {
      state: { data: this.selectedCar },
    });
  }

  deleteCar(carId: number) {
    const ans = confirm("do you sure you want to delete the car?");
    if (ans) {
      this.carService.deleteCar(carId).subscribe((car: Car) => {
        this.getCars();
      });
    }
  }

  showCar(carId: number): void {
    this.selectedCar = this.cars.find((e: Car) => e.id === carId);
    this._router.navigate(["/cars", carId], {
      state: { data: this.selectedCar },
    });
  }

  download() {
    var csvData = this.ConvertToCSV(this.cars);
    var a = document.createElement("a");
    a.setAttribute("style", "display:none;");
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: "text/csv" });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    var x: Date = new Date();
    var link: string =
      "Car_Collections" + x.getMonth() + "_" + x.getDay() + ".csv";
    a.download = link.toLocaleLowerCase();
    a.click();
  }

  ConvertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";
    var row = "";

    for (var index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ",";
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + "\r\n";

    for (var i = 0; i < array.length; i++) {
      var line = "";
      for (var index in array[i]) {
        if (line != "") line += ",";

        line += array[i][index];
      }
      str += line + "\r\n";
    }
    return str;
  }
}
