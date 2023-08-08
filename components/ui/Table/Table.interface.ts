import { PersonModel } from "@/Services/Persons/Person.interface";

export interface baseColumnModel {
  key: string;
  header: string | null;
  name: string;
}
export interface Props {
  column: baseColumnModel[];
  data: PersonModel[];
}
