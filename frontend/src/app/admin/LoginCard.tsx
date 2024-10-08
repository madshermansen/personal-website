"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { handleLogin } from "./handleLogin";
import useAuthStore from "@/lib/state/authStore";
import { enqueueSnackbar } from "notistack";

export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuthStore();
  const { setAuthToken, loginAttempts, setLoginAttempts } = useAuthStore();

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Card className="w-1/3 h-1/3 border-zinc-400 bg-background">
        <CardHeader>
          <CardTitle className="text-white">Log in</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Username"
            className="text-white border-zinc-400 my-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            className="text-white border-zinc-400 my-2"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="flex justify-between">
            <Button
              className="bg-primary font-bold montserrat text-black hover:bg-active"
              onClick={() => setIsLoggedIn(true)}
            >
              Guest Login
            </Button>
            <Button
              className="bg-primary font-bold montserrat text-black hover:bg-active"
              onClick={async () => {
                if (loginAttempts >= 3) {
                  enqueueSnackbar(
                    "Too many login attempts, Just refresh the page :)",
                    { variant: "warning" }
                  );
                  return;
                } else {
                  setLoginAttempts(loginAttempts + 1);
                }
                const result = await handleLogin(username, password);
                setIsLoggedIn(result.isLoggedIn);
                if (result.error) {
                  enqueueSnackbar(result.error, { variant: "error" });
                  return;
                }
                setAuthToken(result.authToken);
              }}
            >
              Log in
            </Button>
          </div>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  );
}
