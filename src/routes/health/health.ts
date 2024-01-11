import { Router } from "express";

const router = Router();

/**
 * @swagger
 *
 * /health:
 *   get:
 *     description: Health check endpoint
 *     tags:
 *       - Health
 *     responses:
 *       '200':
 *         description: Service is healthy
 *       '500':
 *         description: Service is not healthy
 */

router.get("/health", (req, res) => {
    res.status(200).json({ message: "Service is healthy" });
});

export { router as healthRouter };
