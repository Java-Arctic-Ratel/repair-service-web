import {Component, OnInit} from '@angular/core';
import {RepairOrder} from '../model/repairOrder';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  id: number;
  submitted: any;
  repairOrder: RepairOrder = {
    "repairOrderId": null,
    "repairOrderStartDate": null,
    "repairOrderEndDate": null,
    "repairOrderIssueDate": null,
    "repairOrderCostEstimated": null,
    "repairOrderCostTotal": null,
    "client": {
      "clientPhoneNumber": null,
      "firstName": null,
      "lastName": null,
      "address": {
        "houseNumber": null,
        "apartmentNumber": null,
        "city": {
          "cityName": null
        },
        "street": {
          "streetName": null
        }
      }
    },
    "device": {
      "deviceIMEIOrSn": null,
      "devicePassword": null,
      "type": {
        "typeName": null
      },
      "model": {
        "modelName": null
      },
      "brand": {
        "brandName": null
      },
      "appearance": {
        "appearanceName": null
      },
      "complectation": {
        "complectationName": null
      },
      "defect": {
        "defectName": null
      }
    },
    "employee": {
      "firstName": null,
      "lastName": null,
      "employeeType": {
        "employeeTypeName": null
      }
    },
    "sparePart": {
      "sparePartName": null,
      "sparePartCost": null
    },
    "status": {
      "statusName": null
    }
  };

  constructor(private route: ActivatedRoute, private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.repairOrder = new RepairOrder();

    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrder(this.id)
      .subscribe(data => {
        console.log(data);
        this.repairOrder = data;
      }, error => console.log(error));
  }

  updateOrder() {
    this.orderService.updateOrder(this.repairOrder)
      .subscribe(data => console.log(data), error => console.log(error));
    this.repairOrder = new RepairOrder();
    this.gotoList();
  }

  onSubmit() {
    this.updateOrder();
  }

  gotoList() {
    this.router.navigate(['/order']);
  }
}
