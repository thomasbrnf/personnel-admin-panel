import { db } from "../../dabatase";
import { personnelSQL } from "./CONSTANTS";

export async function getPersonnel() {
  return new Promise((resolve, reject) => {
    db.all(personnelSQL, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
