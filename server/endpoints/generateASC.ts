import express from "express";
import { generateASCfile, getPersonData } from "./services";
import { PersonData } from "../utils/helper";

const router = express.Router();
router.use(express.json());

router.get("/generate-asc/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const personData: PersonData = (await getPersonData(id)) as PersonData;

    const file = await generateASCfile(personData);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );
    res.setHeader("Content-Disposition", 'attachment; filename="ASC.xlsx"');

    file.xlsx.write(res);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export { router as generateASCRouter };
