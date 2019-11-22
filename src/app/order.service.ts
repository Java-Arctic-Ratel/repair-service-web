import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RepairOrderPage} from "./model/repairOrderPage";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: String = 'http://localhost:8090/order';

  getOrder(repairOrderId: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/${repairOrderId}`);
  }

  getOrders(page: number) {
    return this._http.get(this.baseUrl + '?page=' + page);
  }

  createOrder(order: Object): Observable<Object> {
    return this._http.post(`${this.baseUrl}`, order);
  }

  updateOrder(value: any): Observable<Object> {
    return this._http.put(`${this.baseUrl}`, value);
  }

  deleteOrder(repairOrderId: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${repairOrderId}`, {responseType: 'text'});
  }

  // getOrdersList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  constructor(private _http: HttpClient) {
  }

}
