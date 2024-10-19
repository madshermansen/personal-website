"use server"
interface SessionToken {
  token: string;
  role: string;
  username: string;
}

let sessionTokens: SessionToken[] = [];

export async function setSessionToken(
  token: string,
  role: string,
  username: string,
) {
  sessionTokens.push({ token, role, username });
}

export async function getSessionToken(token: string): Promise<SessionToken | undefined> {
  console.log(sessionTokens);
  return sessionTokens.find((t) => t.token === token);
}

export async function getSessionTokenByUsername(
  username: string,
): Promise<SessionToken | undefined> {
  return sessionTokens.find((t) => t.username === username);
}
