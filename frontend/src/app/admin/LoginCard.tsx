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
import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import useAuthStore from "@/lib/state/authStore";

export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuthStore();

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Card className="w-1/3 h-1/3 border-zinc-400 bg-background">
        <CardHeader>
          <CardTitle className="text-white">Log in</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            className="text-white border-zinc-400 my-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="text-white border-zinc-400 my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="bg-primary font-bold montserrat text-black hover:bg-active"
            onClick={async () => {
                const result = await handleLogin(username, password);
                setIsLoggedIn(!!result);
              }}
          >
            Log in
          </Button>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  );
}
