import express from "express";
import {
  personnelRouter,
  addPersonRouter,
  editPersonRouter,
  specificPersonRouter,
  deletePersonRouter,
  generateASCRouter,
} from "../endpoints";

const router = express.Router();

router.use(personnelRouter);
router.use(specificPersonRouter);
router.use(deletePersonRouter);

router.use(addPersonRouter);
router.use(editPersonRouter);

router.use(generateASCRouter);

export { router };
