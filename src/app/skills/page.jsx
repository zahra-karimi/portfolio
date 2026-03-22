"use client"

import SkillCard from "@/components/SkillCard";
import { Code, Server, Wrench, Brain } from "lucide-react";

export default function Skills() {

  const frontend = [
    "HTML5","CSS3","JavaScript","React.js","Next.js","Vue.js","Nuxt.js","WordPress",
    "Tailwind CSS","Material UI (MUI)","Bootstrap","Vuetify","DOM"
  ];

  const backend = [
    "Node.js","Express.js","Laravel","MongoDB","MySQL","Firebase","REST APIs"
  ];

  const tools = [
    "Git","GitHub","Agile Methodologies","Pair Programming","Google Analytics","Power BI","Adobe Photoshop","Figma","Canva"
  ];

  const soft = [
    "Critical Thinking","Design Thinking","Systems Thinking","Problem Solving",
    "Team Collaboration","Communication","Adaptability","Time Management"
  ];

  return (
  <section id="skills" className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center text-brand mb-12">
      Skills & Technologies
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      <SkillCard
        title="Front-End Development"
        skills={frontend}
        icon={<Code size={16} className="text-white" />}
      />

      <SkillCard
        title="Back-End Development"
        skills={backend}
        icon={<Server size={16} className="text-white" />}
      />

      <SkillCard
        title="Tools & Workflow"
        skills={tools}
        icon={<Wrench size={16} className="text-white" />}
      />

      <SkillCard
        title="Professional Skills"
        skills={soft}
        icon={<Brain size={16} className="text-white" />}
      />
    </div>

  </div>
</section>
  );
}