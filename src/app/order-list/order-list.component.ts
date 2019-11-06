import {OrderDetailsComponent} from './../order-details/order-details.component';
import {Observable} from 'rxjs';
import {OrderService} from '../order.service';
import {Order} from './../order';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getOrdersList();
  }

  deleteOrder(ordersId: number) {
    this.orderService.deleteOrder(ordersId)

      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  orderDetails(ordersId: number) {
    this.router.navigate(['details', ordersId]);
  }

  updateOrder(ordersId: number) {
    this.router.navigate(['update', ordersId]);
  }

  createOrder(ordersId: number) {

    this.orderService.createOrder(new Order());
  }
}
