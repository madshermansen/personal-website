"use client";
import useAuthStore from "@/lib/state/authStore";
import LoginCard from "./LoginCard";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Page() {
  const { isLoggedIn, authToken } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn && authToken !== undefined) {
      enqueueSnackbar("Logged in", { variant: "success" });
    } else if (isLoggedIn) {
      enqueueSnackbar("Logged in as Guest, some features are not available", {
        variant: "success",
      });
    }

    if (isLoggedIn) {
      redirect('/admin/dashboard')
    }
  }, [isLoggedIn, authToken]);

  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <LoginCard />
    </main>
  );
}
