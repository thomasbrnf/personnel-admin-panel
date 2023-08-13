import express from "express";
import { db } from "../dabatase";
import { PersonData } from "../utils/helper";

const router = express.Router();

router.use(express.json());

router.post("/add-person", async (req, res) => {
  const personData = req.body;

  try {
    validateData(personData);

    await addPerson(personData);
    res.status(201).json("Person added");
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

function validateData(data: PersonData) {
  if (!data.name && data.id) throw new Error("Name is required");
}

async function addPerson(data: PersonData) {
  const insertSql = `
    INSERT INTO personnel (${getColumnNames(data)})
    VALUES (${getParamMarkers(data)})
  `;

  await db.run(insertSql, getValues(data));
}

function getColumnNames(data: PersonData) {
  return Object.keys(data).join(", ");
}

function getParamMarkers(data: PersonData) {
  return Object.keys(data)
    .map(() => "?")
    .join(", ");
}

function getValues(data: PersonData) {
  return Object.values(data);
}

export { router as addPersonRouter };
