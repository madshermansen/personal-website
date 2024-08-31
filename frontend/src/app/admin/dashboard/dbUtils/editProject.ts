"use server";
import { getSessionToken } from '@/lib/serverState.ts/sessionTokens';
import { sql } from "@vercel/postgres";

export async function updateProject(authToken: string, title: string, description: string, image_url: string, demo_url: string, github_url: string) {
    
    if (await getSessionToken(authToken) === undefined) {
        console.error('Unauthorized');
    }
    try {
        const result = await sql`
            INSERT INTO projects (title, description, image_url, demo_url, github_url) 
            VALUES (${title}, ${description}, ${image_url}, ${demo_url}, ${github_url})
            RETURNING *;
        `;
        return { project: result.rows[0]}
    } catch (err: any) {
        return { error: err.message };
    }
}

export async function deleteProject(authToken: string, id: number) {
    if (await getSessionToken(authToken) === undefined) {
        console.error('Unauthorized');
    }
    try {
        const result = await sql`
            DELETE FROM projects WHERE id = ${id}
            RETURNING *;
        `;
        return { project: result.rows[0]}
    } catch (err: any) {
        return { error: err.message };
    }
}