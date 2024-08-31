"use client";
import useAuthStore from "@/lib/state/authStore";
import LoginCard from "./LoginCard";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import AddProjects from "./dashboard/AddProjects";

export default function Page() {
  const { isLoggedIn, authToken, setIsLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn && authToken !== undefined) {
      enqueueSnackbar("Logged in", { variant: "success" });
    } else if (isLoggedIn) {
      enqueueSnackbar("Logged in as Guest, some features are not available", {
        variant: "success",
      });
    }
  }, [isLoggedIn, authToken]);

  const logOut = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      enqueueSnackbar("Logged out", { variant: "success" });
    } else {
      enqueueSnackbar("Not logged in", { variant: "error" });
    }
  }

  return (
    <main className="flex w-screen h-screen items-center justify-center">
      {isLoggedIn ? <AddProjects /> : <LoginCard />}
      <button onClick={logOut}>Log out</button>
    </main>
  );
}
