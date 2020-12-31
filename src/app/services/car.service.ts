import { Injectable } from "@angular/core";
import { Car } from "../models/car";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CarService {
  readonly rootUrl = "http://localhost:47408/api";
  constructor(private http: HttpClient) {}

  getCarById(carId: number): Observable<any> {
    var x = this.http.get(this.rootUrl + "/Car/" + carId);
    console.log(x);
    return x;
  }
  getEmployees() {
    return this.http.get(this.rootUrl + "/Employees");
  }

  getModel() {
    return this.http.get(this.rootUrl + "/Models");
  }

  getCars() {
    return this.http.get(this.rootUrl + "/Car");
  }

  addCar(car: Car): Observable<any> {
    return this.http.post(this.rootUrl + "/Car", car);
  }

  deleteCar(carId: number) {
    return this.http.delete(this.rootUrl + "/Car/" + carId);
  }

  editCar(car: Car) {
    return this.http.put(this.rootUrl + "/Car/" + car.id, car);
  }
}
