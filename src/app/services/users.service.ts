import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ICustomer } from '@interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getList(limit: number, page: number) {
    return this.http.get(environment.api + 'user', {
      params: {
        limit: limit.toString(),
        page: page.toString()
      }
    })
  }

  createUser(customer: ICustomer) {
    return this.http.post(environment.api + 'user', customer);
  }

  deleteUser(id: number) {
    return this.http.delete(environment.api + 'user/' + id);
  }
}
