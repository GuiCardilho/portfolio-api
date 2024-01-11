import "dotenv/config";
import { app } from "./src/app";
import { env } from "./src/env";
import fs from "fs";
import https from "https";
import { prisma } from "./src/database/database";

const PORT = env.PORT || 10000;

if (process.env.NODE_ENV === "production") {
    const sslServer = https.createServer(
        {
            key: fs.readFileSync(process.env.KEY_SSL as string),
            cert: fs.readFileSync(process.env.KEY_CERT as string),
            ca: fs.readFileSync(process.env.KEY_CA as string),
        },
        app
    );
    sslServer.listen(PORT, async () => {
        try {
            console.log("🔒 - SSL");
            console.log(`🚀 - Server is running in ${PORT}`);
        } catch (error: any) {
            console.log(`Error: ${error.message}`);
        }
    });
} else {
    app.listen(PORT, () => {
        console.log("🔓 - Not SSL");
        console.log(`🚀 - Server is running in http://localhost:${PORT}`);

        prisma.user
            .count()
            .then(() => {
                console.log("🏦 - Database is running");
            })
            .catch((error) => {
                console.log(`❌ - Database Error: ${error.message}`);
            });
    });
}
