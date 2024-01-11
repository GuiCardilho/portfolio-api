import "dotenv/config";
import { app } from "./src/app";
import { env } from "./src/env";
import fs from "fs";
import https from "https";

const PORT = env.PORT || 10000;

if (process.env.NODE_ENV === "development") {
    app.listen(PORT, () => {
        console.log("🔓 - Not SSL");
        console.log(`🚀 - Server is running in http://localhost:${PORT}`);
    });
} else {
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
}
