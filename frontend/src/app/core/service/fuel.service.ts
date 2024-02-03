import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';
import { Fuel } from '../model/fuel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuelService extends DaoService<Fuel>{

  constructor(public override http: HttpClient) {
    super('fuel/', http);
  }
}
