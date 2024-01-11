import { prisma } from "../../database/database";

class UserServices {
    async create(email: string, name: string, password: string) {
        if (!email || !name || !password) {
            return {
                message: "Missing required fields",
                status: 400,
            };
        }

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password,
            },
        });

        return {
            message: "User created successfully",
            status: 201,
            data: user,
        };
    }
}

export const userServices = new UserServices();
