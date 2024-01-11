import { Request, Response } from "express";
import { userServices } from "../../services/user";

class UserController {
    async create(req: Request, res: Response) {
        const { email, name, password } = req.body;

        const response = await userServices.create(email, name, password);

        return res.status(response.status).json(response);
    }
}

export const userController = new UserController();
