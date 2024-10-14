import StickyInfo from "./components/navigation/StickyInfo";
import Experience from "./components/frontPageSections/Experience";
import RecentProjects from "./components/frontPageSections/RecentProjects";
import AboutMe from "./components/frontPageSections/AboutMe";
import BackgroundObject from "./components/backgroundObject";
import Contact from "./components/frontPageSections/Contact";
import Extra from "./components/frontPageSections/Extra";
import { getProjects } from "@/sanity/lib/client";
import { useEffect } from "react";
export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row scroll-smooth lg:p-8 p-2">
      <StickyInfo />
      <div className="lg:w-2/3 p-2 gap-4 flex flex-col">
        <AboutMe />
        <Experience />
        <RecentProjects />
        <Contact />
        <Extra />
      </div>
    </main>
  );
}
