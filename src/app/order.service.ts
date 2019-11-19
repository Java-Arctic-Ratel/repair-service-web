import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8090/order';

  constructor(private http: HttpClient) {
  }

  getOrder(repairOrderId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${repairOrderId}`);
  }

  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, order);
  }

  updateOrder(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteOrder(repairOrderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${repairOrderId}`, {responseType: 'text'});
  }

  getOrdersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
