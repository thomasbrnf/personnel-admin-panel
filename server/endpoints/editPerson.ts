import express from "express";
import { db } from "../dabatase";
import { PersonData } from "../utils/helper";
import { getValues } from "./services";

const router = express.Router();
router.use(express.json());

router.post("/edit-person/:id", async (req, res) => {
  const personData = { ...req.body, id: req.params.id };

  try {
    validateData(personData);

    await editPerson(personData);
    res.status(201).json("Person data has been updated successfully!");
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

function validateData(data: PersonData) {
  if (!data.name && !data.id) throw new Error("Name and ID are required");
}

async function editPerson(data: PersonData) {
  const updateSql = `
      UPDATE personnel 
      SET ${getUpdateClauses(data)}
      WHERE id = ?
    `;

  const id = data.id;

  await db.run(updateSql, [...getValues(data), id]);
}

function getUpdateClauses(data: PersonData) {
  const keys = Object.keys(data);
  return keys.map((key) => `${key} = ?`).join(", ");
}

export { router as editPersonRouter };
