import express from "express";
import { db } from "../dabatase";

const router = express.Router();
const sql = "SELECT * FROM personnel WHERE id =?";

router.use(express.json());

router.get("/personnel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const row = (await getPerson(id)) as any[];
    sendPerson(res, row);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

function sendPerson(res: any, rows: any[]) {
  res.json(rows[0]);
}

function getPerson(id: string) {
  return new Promise((resolve, reject) => {
    db.all(sql, [id], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export { router as specificPersonRouter };
