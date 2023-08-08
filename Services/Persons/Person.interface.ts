import { type } from "os";

export interface PersonModel {
  id: number;
  userId: number;
  fullName: string;
  education: string;
  status: string;
}
export type addNewPerson = Omit<
  PersonModel,
  "userId" | "fullName" | "education" | "status"
>;
