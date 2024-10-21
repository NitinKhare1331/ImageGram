import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.MONGO_DB_URL;

export const AWS_ACCESS_KEY = process.env.ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY_ID;

export const AWS_REGION = process.env.REGION;