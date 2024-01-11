import express from "express";
import { router } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "./swagger";
import { consoleMiddleware } from "./middlewares/console";
import cors from "cors";

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }), cors());

const swaggerUiOptions = {
    explorer: false,
    swaggerOptions: {
        docExpansion: "none",
    },
};

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiSpecification, swaggerUiOptions)
);

app.use(consoleMiddleware, router);

export { app };
