import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RepairOrderPage} from "./model/repairOrderPage";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8090/order';
  private ordersOnPage = "20";

  getOrder(repairOrderId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${repairOrderId}`);
  }

  getRepairOrderPage(page: number): Observable<RepairOrderPage> {
    let url = this.baseUrl + "?page=" + page + "&size=" + this.ordersOnPage;
    return this.http.get<RepairOrderPage>(url);
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

  // getOrdersList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
