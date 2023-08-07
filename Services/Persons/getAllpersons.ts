import { api } from "@/config/axios";
import { PersonModel } from "./getPerson.interface";
import { ResponseBase } from "../ResponseBase.interface";
const route = "/getPersons";
export const getAllPerson = async () => {
  const res = await api.get<ResponseBase<PersonModel>>(route);
  return res.data;
};
