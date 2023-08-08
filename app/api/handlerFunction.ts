import { persons } from "@/lib/data";
import type { PersonModel } from "@/Services/Persons/Person.interface";
import translate from "@/assets/translate/translate.json";
import { nationalCodeValidation } from "@/utils/userIdValidation";
const id = persons.length + 1;
type addNewPerson = Omit<PersonModel, "id">;
export const getAllPersons = () => persons;

export const addNewPerson = (person: addNewPerson) => {
  persons.push({ id, ...person });
};
