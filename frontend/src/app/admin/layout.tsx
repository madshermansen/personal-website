"use client";
import { SnackbarProvider } from "notistack";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <SnackbarProvider />
        {children}
        </div>

    )
}