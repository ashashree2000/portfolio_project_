import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
        <SkillsSection />
        <Projects />
      </div>
    </div>
  );
}
