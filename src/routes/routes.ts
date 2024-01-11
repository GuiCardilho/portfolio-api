import { Router } from "express";
import { healthRouter } from "./health/health";

const router = Router();

router.use(healthRouter);

export { router };
