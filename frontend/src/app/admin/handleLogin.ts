"use server";
import { sql } from "@vercel/postgres";
import * as passwordHash from "password-hash";

export async function handleLogin(
  username: string,
  password: string,
): Promise<Boolean> {
  try {
    let { rows } = await sql`SELECT * FROM users WHERE username = ${username}`;
    console.log(rows);
    if (rows.length === 0) {
      throw new Error("Invalid username or password");
    }

    let isValidPassword = passwordHash.verify(password, rows[0].password_hash);
    if (isValidPassword) {
      return true;
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (err: any) {
    return false;
  }
}
