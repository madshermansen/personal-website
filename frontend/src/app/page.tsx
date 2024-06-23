import { sql } from "@vercel/postgres";
import SlidingBackground from "./components/SlidingBackground";

export default function Home() {
  return (
    <main>
      <SlidingBackground />
    </main>
  );
}
