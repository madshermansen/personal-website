"use server"
import { sql } from "@vercel/postgres";

export async function getProjects() {
    const response = await sql`SELECT * FROM projects ORDER BY created_at DESC LIMIT 5`;
    
    if (response.rows.length > 0) {
        return response.rows;
    }

    return [];

}