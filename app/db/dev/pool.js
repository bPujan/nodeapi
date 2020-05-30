import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const dbConfig = { connectionString: process.env.DATABASE_URl };
const pool = new Pool(dbConfig);
export default pool;