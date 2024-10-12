"use server"
import { sql } from "@vercel/postgres";

export async function getProjects() {
    const response = await sql`SELECT * FROM projects ORDER BY created_at DESC LIMIT 5`;
    
    if (response.rows.length > 0) {
        return response.rows;
    }

    return [];

}

export async function getProjectByID(id: number) {
    const response = await sql`SELECT * FROM projects WHERE id = ${id}`;
    
    if (response.rows.length > 0) {
        return response.rows[0];
    }

    return null;
    
}