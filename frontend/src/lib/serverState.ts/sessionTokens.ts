interface SessionToken {
  token: string;
  role: string;
  username: string;
}

let sessionTokens: SessionToken[] = [];

export default function setSessionToken(
  token: string,
  role: string,
  username: string,
) {
  sessionTokens.push({ token, role, username });
}

export function getSessionToken(token: string): SessionToken | undefined {
  console.log(sessionTokens);
  return sessionTokens.find((t) => t.token === token);
}

export function getSessionTokenByUsername(
  username: string,
): SessionToken | undefined {
  return sessionTokens.find((t) => t.username === username);
}
