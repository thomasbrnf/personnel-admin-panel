import express from "express";
import { getPersonData } from "./services";
import { PersonData } from "../utils/helper";

const router = express.Router();
router.use(express.json());

router.get("/personnel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const personData: PersonData = (await getPersonData(id)) as PersonData;

    res.json(personData);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export { router as specificPersonRouter };
