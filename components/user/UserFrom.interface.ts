export enum degrees {
  low = "highSchool",
  med = "diploma",
  upperMed = "Bachelor",
  high = "Master",
  upperHigh = "Doctoral",
}
export enum activities {
  on = "active",
  off = "disabled",
}
export interface userFomModel {
  userId: number | null;
  firstName: string;
  lastName?: string;
  education: degrees;
  status: activities;
}
export interface selectBoxItemModel {
  value: string;
  label: string;
  id: number;
}
