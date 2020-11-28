import * as dotenv from "dotenv";

const ENV = process.env.NODE_ENV;

if (ENV != "development") dotenv.config();
let DB_URI = process.env.DEV_DB_URL;
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 5000;

if (ENV === "production") {
  DB_URI = process.env.PROD_DB_URL;
} else if (ENV === "test") {
  DB_URI = process.env.TEST_DB_URL;
}

export default { PORT, DB_URI, ENV };
