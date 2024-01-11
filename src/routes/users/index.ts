import { Router } from "express";
import { userController } from "../../controllers/user";

const router = Router();

/**
 * @swagger
 *
 * /users:
 *   post:
 *      description: Health check endpoint
 *      tags:
 *          - Users
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  format: email
 *                                  description: The email address of the user
 *                                  example: user@example.com
 *                              name:
 *                                  type: string
 *                                  description: The name of the user
 *                                  example: John Doe
 *                              password:
 *                                  type: string
 *                                  description: The password for the user
 *                                  example: securepassword123
 *      responses:
 *          '200':
 *              description: Created user successfully
 *          '500':
 *              description: Failed to create user
 *
 */

router.post("/", userController.create);

export { router as usersRouter };
