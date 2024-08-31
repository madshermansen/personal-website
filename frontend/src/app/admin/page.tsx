"use client";
import useAuthStore from "@/lib/state/authStore";
import LoginCard from "./LoginCard";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import AddProjects from "./dashboard/AddProjects";
import { Button } from "@/components/ui/button";
import ViewProjects from "./dashboard/ViewProjects";

export default function Page() {
  const { isLoggedIn, authToken, setIsLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn && authToken !== undefined) {
      enqueueSnackbar("Logged in", { variant: "success" });
    } else if (isLoggedIn) {
      enqueueSnackbar(
        "Logged in as Guest, you won't be able to do much, but you can look around",
        {
          variant: "success",
        }
      );
    }
  }, [isLoggedIn, authToken]);

  const logOut = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      enqueueSnackbar("Logged out", { variant: "default" });
    } else {
      enqueueSnackbar("Not logged in", { variant: "warning" });
    }
  };

  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center">
      {isLoggedIn ? (
        <div className="w-full h-full flex flex-row justify-center items-center gap-2 p-4">
          <ViewProjects />
          <AddProjects />
        </div>
      ) : (
        <LoginCard />
      )}
      {isLoggedIn && <Button onClick={logOut}>Log out</Button>}
    </main>
  );
}
