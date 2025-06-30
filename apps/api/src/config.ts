import { CorsOptions } from "cors";
import { config } from "dotenv";
import { resolve } from "path";

export const NODE_ENV = process.env.NODE_ENV || "development";

const envFile = NODE_ENV === "development" ? ".env.local" : ".env";

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

export const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000", "https://muhammad-fajar-sidiq.vercel.app/"],
  credentials: true,
};

// Load all environment variables from .env file

export const PORT = process.env.PORT || 8000;

// nodemailer config
export const NODEMAILER_USER = process.env.NODEMAILER_USER;
export const NODEMAILER_PASS = process.env.NODEMAILER_PASS;

// nodemailer config
export const node_account = {
  user: process.env.NODEMAILER_USER || "",
  pass: process.env.NODEMAILER_PASS || "",
};
