import { db } from "../../dabatase";
import { personSQL } from "./CONSTANTS";
import { PersonData } from "../../utils/helper";

export async function getPersonData(id: string) {
  return new Promise((resolve, reject) => {
    db.all(personSQL, [id], (err, rows) => {
      if (err) reject(err);
      else resolve(rows[0]);
    });
  });
}

export function getValues(data: PersonData) {
  return Object.values(data);
}
