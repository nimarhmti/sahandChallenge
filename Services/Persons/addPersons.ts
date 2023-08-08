import { api } from "@/config/axios";
import { PersonModel, addNewPerson } from "./Person.interface";
import { ResponseBase } from "../ResponseBase.interface";
const rout = "addPerson";
export const addPerson = async (data: addNewPerson) => {
  const res = await api.post<ResponseBase<addNewPerson>>(rout, data);
  return res.data;
};
