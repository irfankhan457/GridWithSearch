import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from '../domain/car';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {
    
    constructor(private http: HttpClient,
                private _http: Http) {}
    
    getCarsSmall() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }

    getAllCars() {
        return this._http.get(`http://localhost:8080/api/cars`)
        .map((res:Response) => res.json());
      }
}
