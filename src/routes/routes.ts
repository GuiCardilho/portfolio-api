import { Router } from "express";
import * as fs from "fs";
import * as path from "path";

// Read all routes from the current directory and subdirectories
const readRoutes = (dir: string, router: Router, basePath: string = "") => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);

        if (stat.isDirectory()) {
            readRoutes(filePath, router, path.join(basePath, file));
        } else {
            const routeModule = require(filePath);

            const routePath = path.join(
                basePath,
                file === "index.ts" || file === "index.js"
                    ? ""
                    : file.replace(".ts", "").replace(".js", "")
            );

            if (routeModule) {
                Object.keys(routeModule).forEach((route) => {
                    router.use("/" + routePath, routeModule[route]);
                });
            }
        }
    });
};

const router = Router();

readRoutes(__dirname, router);

export { router };
