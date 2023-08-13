import express, { Response } from "express";
import { db } from "../dabatase";

const router = express.Router();
const sql = "SELECT * FROM personnel";

router.use(express.json());

router.get("/personnel", async (req, res: Response) => {
  try {
    const rows = (await getPersonnel()) as any[];
    sendPersonnel(res, rows);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

function sendPersonnel(res: Response, rows: any[]) {
  res.json(rows);
}

function getPersonnel() {
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export { router as personnelRouter };
