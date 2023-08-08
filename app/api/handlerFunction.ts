import { persons } from "@/lib/data";
import { PersonModel } from "@/Services/Persons/Person.interface";
import translate from "@/assets/translate/translate.json";
import { nationalCodeValidation } from "@/utils/userIdValidation";
export const getAllPersons = () => persons;

export const addNewPerson = (person: PersonModel) => persons.push(person);
