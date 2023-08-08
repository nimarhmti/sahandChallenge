import { activities, degrees } from "@/enum/enums";

export interface userFomModel {
  userId: number;
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
