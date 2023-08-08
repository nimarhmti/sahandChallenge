import { persons } from "@/lib/data";
import { PersonModel } from "@/Services/Persons/getPerson.interface";
import translate from "@/assets/translate/translate.json";
import { nationalCodeValidation } from "@/utils/userIdValidation";
export const getAllPersons = () => persons;

export const addNewPerson = (person: PersonModel) => {
  const ID = String(person.userId);
  if (!nationalCodeValidation(ID)) {
    throw new Error(translate.ERROR_MESSAGES.DUPLICATED);
  } else {
    const existingPerson = persons.find((item) => item.userId == Number(ID));
    if (!existingPerson) persons.push(person);
    else throw new Error(translate.ERROR_MESSAGES.DUPLICATED);
  }
};
