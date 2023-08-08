import { api } from "@/config/axios";
import { PersonModel } from "./getPerson.interface";
import { ResponseBase } from "../ResponseBase.interface";
const rout = "addPerson";
export const addPerson = async (data: PersonModel) => {
  const res = await api.post<ResponseBase<PersonModel>>(rout, data);
  return res.data;
};
