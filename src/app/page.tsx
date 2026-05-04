import Navbar from "@/components/ui/Navbar";
import ProgressBar from "@/components/ui/ProgressBar";
import TitleScreen from "@/components/sections/TitleScreen";
import Index from "@/components/sections/Index";
import PlayerProfile from "@/components/sections/PlayerProfile";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import CaseStudies from "@/components/sections/CaseStudies";
import OriginalSystemDesign from "@/components/sections/OriginalSystemDesign";
import ContactProtocol from "@/components/sections/ContactProtocol";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProgressBar />
      <main>
        <TitleScreen />
        <Index />
        <PlayerProfile />
        <DesignPhilosophy />
        <CaseStudies />
        <OriginalSystemDesign />
        <ContactProtocol />
      </main>
    </>
  );
}
