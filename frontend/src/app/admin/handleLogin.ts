"use server";
import { setSessionToken, getSessionTokenByUsername } from "@/lib/serverState.ts/sessionTokens";
import { sql } from "@vercel/postgres";
import * as passwordHash from "password-hash";

var rand = function () {
  return Math.random().toString(36).substring(2);
};

// returns an auth token and if the login was successful
export async function handleLogin(username: string, password: string) {
  try {
    let { rows } = await sql`SELECT * FROM users WHERE username = ${username}`;
    if (rows.length === 0) {
      throw new Error("Invalid username or password");
    }

    let isValidPassword = passwordHash.verify(password, rows[0].password_hash);
    if (isValidPassword) {
      // generate a random auth token and store in server state
      let authToken = rand() + rand() + rand() + rand();
      let userSession = await getSessionTokenByUsername(username);
      if (!userSession) {
        setSessionToken(authToken, rows[0].role, username);
        return { authToken: authToken, isLoggedIn: true };
      } else {
        return {
          authToken: userSession.token,
          isLoggedIn: false,
          error: "User already logged in",
        };
      }
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (err: any) {
    return { authToken: undefined, isLoggedIn: false, error: err.message };
  }
}
