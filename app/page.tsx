import { Hero } from "@/components/hero";
import { AcceleratingAutonomy } from "@/components/accelerating-autonomy";
import { WhoWeAre } from "@/components/who-we-are";
import { Backers } from "@/components/backers";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-background">
        <div className="w-full mx-auto px-[max(16px,env(safe-area-inset-left))] md:max-w-[1200px] md:px-5">
          <Hero />
        </div>
      </div>

      {/* Accelerating Autonomy */}
      <div className="bg-background">
        <div className="w-full mx-auto px-[max(16px,env(safe-area-inset-left))] md:max-w-[1200px] md:px-5">
          <AcceleratingAutonomy />
        </div>
      </div>

      {/* Who We Are */}
      <div className="bg-background">
        <div className="w-full mx-auto px-[max(16px,env(safe-area-inset-left))] md:max-w-[1200px] md:px-5">
          <WhoWeAre />
        </div>
      </div>

      {/* Backers */}
      <div className="bg-background">
        <div className="w-full mx-auto px-[max(16px,env(safe-area-inset-left))] md:max-w-[1200px] md:px-5">
          <Backers />
        </div>
      </div>

      {/* Contact */}
      <div className="bg-panel">
        <div className="w-full mx-auto px-[max(16px,env(safe-area-inset-left))] md:max-w-[1200px] md:px-5">
          <Contact />
        </div>
      </div>
    </main>
  );
}
