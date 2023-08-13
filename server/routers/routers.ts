import express from "express";
import { personnelRouter } from "../endpoints/personnel";
import { specificPersonRouter } from "../endpoints/specificPerson";
import { addPersonRouter } from "../endpoints/addPerson";
import { editPersonRouter } from "../endpoints/editPerson";
import { deletePersonRouter } from "../endpoints/deletePerson";

const router = express.Router();

router.use(personnelRouter);
router.use(specificPersonRouter);
router.use(deletePersonRouter);

router.use(addPersonRouter);
router.use(editPersonRouter);

export { router };
