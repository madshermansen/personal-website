"use server";
import { sql } from "@vercel/postgres";

// Fetch multiple projects, optionally limited by a given number such as get recent projects
export async function getProjects(limit: number | null = null) {
  try {
    const query = limit
      ? sql`SELECT * FROM projects ORDER BY created_at DESC LIMIT ${limit}`
      : sql`SELECT * FROM projects ORDER BY created_at DESC`;

    const { rows } = await query;
    return rows;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// Fetch a single project by its ID
export async function getProjectByID(id: number) {
  try {
    const { rows } = await sql`SELECT * FROM projects WHERE id = ${id}`;
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
}