import { type } from "os";

export interface PersonModel {
  id: number;
  userId: string;
  fullName: string;
  education: string;
  status: string;
}
export type addNewPerson = Omit<PersonModel, "id">;
