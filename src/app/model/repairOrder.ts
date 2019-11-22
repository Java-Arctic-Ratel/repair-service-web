export class RepairOrder {
  repairOrderId?: number;
  repairOrderStartDate?: Date;
  repairOrderEndDate?: Date;
  repairOrderIssueDate?: Date;
  repairOrderCostEstimated?: number;
  repairOrderCostTotal?: number;
  client?: {
    clientPhoneNumber?: string;
    firstName?: string;
    lastName?: string;
    address?: {
      houseNumber?: number;
      apartmentNumber?: number;
      city?: {
        cityName: string;
      }
      street?: {
        streetName?: string;
      }
    }
  }
  device?: {
    deviceIMEIOrSn?: string;
    devicePassword?: string;
    type?: {
      typeName?: string;
    };
    model?: {
      modelName?: string;
    };
    brand?: {
      brandName?: string;
    };
    appearance?: {
      appearanceName?: string;
    };
    complectation?: {
      complectationName?: string;
    };
    defect?: {
      defectName?: string;
    };
  };
  employee?: {
    firstName?: string;
    lastName?: string;
    employeeType?: {
      employeeTypeName?: string;
    };
  };
  sparePart?: {
    sparePartName?: string;
    sparePartCost?: number;
  };
  status?: {
    statusName?: string;
  };
}
