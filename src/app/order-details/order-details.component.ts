import {RepairOrder} from '../model/repairOrder';
import {Component, OnInit, Input} from '@angular/core';
import {OrderService} from '../order.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id: number;
  order: RepairOrder;

  constructor(private route: ActivatedRoute, private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.order = new RepairOrder();
    this.id = this.route.snapshot.params.id;
    this.orderService.getOrder(this.id)
      .subscribe(data => {
        console.log(data);
        this.order = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['order']);
  }

  updateOrder(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

}
