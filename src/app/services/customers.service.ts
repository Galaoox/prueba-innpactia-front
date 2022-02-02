import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ICustomer } from '@interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }


  getList(limit: number, page: number) {
    return this.http.get(environment.api + 'customer', {
      params: {
        limit: limit.toString(),
        page: page.toString()
      }
    })
  }

  getCustomer(id: number) {
    return this.http.get(environment.api + 'customer/' + id);
  }

  createCustomer(customer: ICustomer) {
    return this.http.post(environment.api + 'customer', customer);
  }

  updateCustomer(customer: ICustomer, id: number) {
    return this.http.put(environment.api + 'customer/' + id, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(environment.api + 'customer/' + id);
  }
}
