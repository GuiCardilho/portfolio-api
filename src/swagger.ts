import swaggerJsdoc from "swagger-jsdoc";
import { env } from "./env";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Portfolio GuiCardilho",
            version: "1.0.0",
            description: "Portfolio GuiCardilho API",
        },
        servers: [
            {
                description: "Local server",
                url: `http://localhost:${env.PORT || 10000}`,
            },
        ],
    },
    apis: ["./src/routes/**/*.ts"],
};

export const openapiSpecification = swaggerJsdoc(options);
