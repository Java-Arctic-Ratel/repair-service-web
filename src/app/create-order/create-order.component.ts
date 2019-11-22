import {Component, OnInit} from '@angular/core';
import {RepairOrder} from '../model/repairOrder';
import {Router} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

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

  submitted = false;

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.orderService.createOrder(this.repairOrder)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    // this.router.navigate(['/order']);
  }
}
