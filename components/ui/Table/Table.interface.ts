import { PersonModel } from "@/Services/Persons/getPerson.interface";

export interface baseColumnModel {
  key: string;
  header: string | null;
  name: string;
}
export interface Props {
  column: baseColumnModel[];
  data: PersonModel[] | [];
}

// export type ColumnDefinitionType<T, K extends keyof T> = {
//   key: K;
//   header: string;
//   width?: number;
// };

// export type TableProps<T, K extends keyof T> = {
//   data: Array<T>;
//   columns: Array<ColumnDefinitionType<T, K>>;
// };

// export type TableHeaderProps<T, K extends keyof T> = {
//   columns: Array<ColumnDefinitionType<T, K>>;
// };
