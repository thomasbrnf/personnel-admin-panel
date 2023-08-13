import { PersonData } from "../../../types/types";
import { addPerson, editPersonData } from "./person.api";

export async function submitData(personData: PersonData) {
  return personData.id > 0 ? editPersonData(personData) : addPerson(personData);
}
