import {OrderDetailsComponent} from './../order-details/order-details.component';
import {Observable} from 'rxjs';
import {OrderService} from '../order.service';
import {RepairOrder} from '../model/repairOrder';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Observable<RepairOrder[]>;
  faPlusCircle = faPlusCircle;

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getOrdersList();
  }

  orderDetails(ordersId: number) {
    this.router.navigate(['details', ordersId]);
  }
}
