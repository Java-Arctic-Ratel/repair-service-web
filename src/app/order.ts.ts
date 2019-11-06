export class Order {
  id: number;
  ordersStartDate: Date;
  ordersEndDate: Date;
  ordersCostEstimated: number;
  ordersIssueDate: Date;
  ordersCostTotal: number;
  device: Device;
  status: Status;
  client: Client;
  executor: Executor;
  spareParts: SpareParts;
}

interface Client {
  clientPhoneNumber: string;
  firstName: FirstName;
  lastName: LastName;
  patronymic: Patronymic;
  address: Address;

}

interface FirstName {
  firstName: string;
}

interface LastName {
  lastName: string;
}

interface Patronymic {
  patronymic: string;
}

interface City {
  cityName: string;
}

interface Street {
  streetName: string;
}

interface Address {
  houseNumber: string;
  apartmentNumber: string;
  city: City;
  street: Street;
}

interface Appearance {
  appearanceName: string;
}

interface Complectation {
  complectationName: string;
}

interface Defect {
  defectName: string;
}

interface DeviceCondition {
  appearance: Appearance;
  complectation: Complectation;
  defect: Defect;
}

interface Model {
  modelName: string;
}

interface Brand {
  brandName: string;
}

interface Device {
  deviceIMEIOrSn: string;
  devicePassword: string;
  deviceCondition: DeviceCondition;
  model: Model;
  brand: Brand;
}

interface SpareParts {
  sparePartsName: string;
  sparePartsCost: number;
}

interface Executor {
  firstName: FirstName1;
  lastName: LastName1;
  patronymic: Patronymic1;
}

interface FirstName1 {
  firstName: string;
}

interface LastName1 {
  lastName: string;
}

interface Patronymic1 {
  patronymic: string;
}

interface Status {
  statusName: string;
}
