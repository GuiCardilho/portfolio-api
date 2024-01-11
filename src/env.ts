import { z } from "zod";

export const envSchema = z.object({
    PORT: z.string().default("10000"),
    DATABASE_URL: z.string().default(""),
    KEY_SSL: z.string().default(""),
    KEY_CERT: z.string().default(""),
    KEY_CA: z.string().default(""),
    NODE_ENV: z.string().default("development"),
});

export type Env = z.infer<typeof envSchema>;

export const envParse = envSchema.parse(process.env);

export const env = { ...(process.env as Env) };
