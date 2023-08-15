import express from "express";
import { db } from "../dabatase";

const router = express.Router();
router.use(express.json());

router.get("/delete-person/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await deletePerson(res, id);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

async function deletePerson(res: any, id: string) {
  const sql = "DELETE FROM personnel WHERE id =?";
  db.run(sql, id, function (err) {
    if (err) {
      res.status(401).json(err.message);
    }
    res.status(201).json("Person has been deleted!");
  });
}

export { router as deletePersonRouter };
