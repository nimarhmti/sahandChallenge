import { api } from "@/config/axios";
import { getAllPersonModel } from "./getPerson.interface";
import { ResponseBase } from "../ResponseBase.interface";
const route = "/getPersons";
export const getAllPerson = async () => {
  const res = await api.get<ResponseBase<getAllPersonModel>>(route);
  return res.data;
};
