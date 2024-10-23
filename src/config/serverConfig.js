import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.MONGO_DB_URL;

export const AWS_ACCESS_KEY = process.env.ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY_ID;

export const AWS_REGION = process.env.REGION;

export const AWS_BUCKET_NAME = process.env.BUCKET_NAME;

export const JWT_SECRET = process.env.JWT_SECRET;