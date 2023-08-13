import express from "express";
import { db } from "../dabatase";
import { PersonData } from "../utils/helper";

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

  await db.run(updateSql, [...getUpdateValues(data), id]);
}

function getUpdateClauses(data: PersonData) {
  const keys = Object.keys(data);
  return keys.map((key) => `${key} = ?`).join(", ");
}

function getUpdateValues(data: PersonData) {
  return Object.values(data);
}

export { router as editPersonRouter };
