import {OrderService} from '../order.service';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {RepairOrderPage} from "../model/repairOrderPage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  pageOrder: RepairOrderPage;
  selectedPage: number = 0;
  faPlusCircle = faPlusCircle;

  getRepairOrderPage(page: number): void {
    this.orderService.getRepairOrderPage(page)
      .subscribe(pageOrder => this.pageOrder = pageOrder);
  }

  constructor(private orderService: OrderService,
              private router: Router,
  ) {
  }

  // orderDetails(repairOrderId: number) {
  //   this.router.navigate(['details', repairOrderId]);
  // }

  onSelect(page: number): void {
    console.log("selected page : " + page);
    this.selectedPage = page;
    this.getRepairOrderPage(page);
  }

  ngOnInit() {
    this.getRepairOrderPage(0);
  }


  onChangePage(pageOfItems: Array<any>) {
    this.pageOrder;
  }

}
