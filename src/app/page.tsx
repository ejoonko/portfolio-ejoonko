import IntroductionSection from "@/components/IntroductionSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <IntroductionSection />
      <SkillsSection />
    </main>
  );
}
