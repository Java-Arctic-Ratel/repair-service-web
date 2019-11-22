import {OrderService} from '../order.service';
import {Component, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {PaginationPlugin} from "bootstrap-vue";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  private page: number = 0;
  private orders: Array<any>;
  private pages: Array<number>;

  faPlusCircle = faPlusCircle;

  getOrders() {
    this._orderService.getOrders(this.page).subscribe(
      data => {
        this.orders = data['content'];
        this.pages = new Array(data['totalPages']);
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  orderDetails(ordersId: number) {
    this.router.navigate(['details', ordersId]);
  }

  constructor(private _orderService: OrderService,
              private router: Router) {
  }

  onSelect(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getOrders()
  }

  ngOnInit() {
    this.getOrders();
  }


}
