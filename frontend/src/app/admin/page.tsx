"use client";
import useAuthStore from "@/lib/state/authStore";
import LoginCard from "./LoginCard";

export default function Admin() {
  const { isLoggedIn } = useAuthStore();

  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <LoginCard />
      {isLoggedIn && <div>Logged in</div>}
    </main>
  );
}
