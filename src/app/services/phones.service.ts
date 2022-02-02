import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { IPhone } from '@interfaces/IPhone';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  constructor(private http: HttpClient) { }


  getList(limit: number, page: number, customerId: number) {
    return this.http.get(environment.api + 'phone', {
      params: {
        limit: limit.toString(),
        page: page.toString(),
        customerId: customerId.toString()
      }
    })
  }

  getPhone(id: number) {
    return this.http.get(environment.api + 'phone/' + id);
  }

  createPhone(phone: IPhone) {
    return this.http.post(environment.api + 'phone', phone);
  }

  updatePhone(phone: IPhone, id: number) {
    return this.http.put(environment.api + 'phone/' + id, phone);
  }

  deletePhone(id: number) {
    return this.http.delete(environment.api + 'phone/' + id);
  }
}
