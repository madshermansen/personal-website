"use server";
import { sql } from "@vercel/postgres";

export default async function selectProjects() {
    try {
        const result = await sql`SELECT * FROM PROJECTS ORDER BY created_at DESC`;
        console.log(result.rows);
        return { project: result.rows}
    } catch (err: any) {
        return { error: err.message };
    }
}
