import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' });

const connectionString = process.env.NODE_ENV === 'production' 
  ? process.env.POSTGRES_URL_NON_POOLING 
  : process.env.POSTGRES_URL;

const client = postgres(connectionString!);
export const db = drizzle({ client });