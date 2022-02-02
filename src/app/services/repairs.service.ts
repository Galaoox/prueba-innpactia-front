import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { IRepair } from '@interfaces/IRepair';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  constructor(private http: HttpClient) { }


  getList(limit: number, page: number, phoneId: number) {
    return this.http.get(environment.api + 'repair', {
      params: {
        limit: limit.toString(),
        page: page.toString(),
        phoneId: phoneId.toString()
      }
    })
  }

  getRepair(id: number) {
    return this.http.get(environment.api + 'repair/' + id);
  }

  createRepair(repair: IRepair) {
    return this.http.post(environment.api + 'repair', repair);
  }

  updateRepair(repair: IRepair, id: number) {
    return this.http.put(environment.api + 'repair/' + id, repair);
  }

  deleteRepair(id: number) {
    return this.http.delete(environment.api + 'repair/' + id);
  }
}
