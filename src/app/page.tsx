import Navbar from "@/components/ui/Navbar";
import ProgressBar from "@/components/ui/ProgressBar";
import TitleScreen from "@/components/sections/TitleScreen";
import Index from "@/components/sections/Index";
import PlayerProfile from "@/components/sections/PlayerProfile";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import CoreMechanics from "@/components/sections/CoreMechanics";
import SystemExperience from "@/components/sections/SystemExperience";
import BuildLog from "@/components/sections/BuildLog";
import GameConcepts from "@/components/sections/GameConcepts";
import CaseStudies from "@/components/sections/CaseStudies";
import InterfaceDesign from "@/components/sections/InterfaceDesign";
import ProgressionTree from "@/components/sections/ProgressionTree";
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
        <CoreMechanics />
        <SystemExperience />
        <BuildLog />
        <GameConcepts />
        <CaseStudies />
        <InterfaceDesign />
        <ProgressionTree />
        <ContactProtocol />
      </main>
    </>
  );
}
