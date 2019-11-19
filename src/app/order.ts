export class Order {
  repairOrderId?: number;
  repairOrderStartDate?: string;
  repairOrderEndDate?: string;
  repairOrderIssueDate?: string;
  repairOrderCostEstimated?: object;
  repairOrderCostTotal?: number;
  client?: Client;
  device?: Device;
  employee?: Employee;
  sparePart?: SparePart;
  status?: Status;
}

export interface City {
  cityName?: string;
}

export interface Street {
  streetName?: string;
}

export interface Address {
  houseNumber?: string;
  apartmentNumber?: string;
  city?: City;
  street?: Street;
}

export interface Client {
  clientPhoneNumber?: string;
  firstName?: string;
  lastName?: string;
  address?: Address;
}

export interface Type {
  typeName?: string;
}

export interface Model {
  modelName?: string;
}

export interface Brand {
  brandName?: string;
}

export interface Appearance {
  appearanceName?: string;
}

export interface Complectation {
  complectationName?: string;
}

export interface Defect {
  defectName?: string;
}

export interface Device {
  deviceIMEIOrSn?: string;
  devicePassword?: string;
  type?: Type;
  model?: Model;
  brand?: Brand;
  appearance?: Appearance;
  complectation?: Complectation;
  defect?: Defect;
}

export interface EmployeeType {
  employeeTypeName?: string;
}

export interface Employee {
  firstName?: string;
  lastName?: string;
  employeeType?: EmployeeType;
}

export interface SparePart {
  sparePartName?: string;
  sparePartCost?: number;
}

export interface Status {
  statusName?: string;
}
