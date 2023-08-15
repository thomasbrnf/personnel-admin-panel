import express, { Response } from "express";
import { getPersonnel } from "./services";

const router = express.Router();
router.use(express.json());

router.get("/personnel", async (req, res: Response) => {
  try {
    const rows = (await getPersonnel()) as any[];
    res.json(rows);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export { router as personnelRouter };
