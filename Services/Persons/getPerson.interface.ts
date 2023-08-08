import { activities, degrees } from "@/enum/enums";

export interface PersonModel {
  id: number;
  userId: number;
  fullName: string;
  education: degrees | string;
  status: activities | string;
}
