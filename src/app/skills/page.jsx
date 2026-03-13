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
    "Git","GitHub","Agile Methodologies","Pair Programming","Google Analytics"
  ];

  const soft = [
    "Critical Thinking","Design Thinking","Systems Thinking","Problem Solving",
    "Team Collaboration","Communication","Adaptability","Time Management"
  ];

  return (
    <section id="skills" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>

       
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCard
            title="Front-End Development"
            skills={frontend}
            gradient="from-pink-500 to-purple-500"
            icon={<Code size={16} className="text-white" />}
          />

          <SkillCard
            title="Back-End Development"
            skills={backend}
            gradient="from-purple-500 to-indigo-500"
            icon={<Server size={16} className="text-white" />}
          />

          <SkillCard
            title="Tools & Workflow"
            skills={tools}
            gradient="from-indigo-500 to-blue-500"
            icon={<Wrench size={16} className="text-white" />}
          />

          <SkillCard
            title="Professional Skills"
            skills={soft}
            gradient="from-purple-600 to-blue-600"
            icon={<Brain size={16} className="text-white" />}
          />
        </div>
      </div>
    </section>
  );
}