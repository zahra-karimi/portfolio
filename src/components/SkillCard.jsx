"use client";

import { useState } from "react";

const SkillCard = ({ title, skills, icon }) => {
  const [showAll, setShowAll] = useState(false);
  const displaySkills = showAll ? skills : skills.slice(0, 5);

  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-accent text-white">
          {icon}
        </div>
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="space-y-2">
        {displaySkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
            <span className="text-sm text-gray-700">{skill}</span>
          </div>
        ))}
      </div>

      {skills.length > 5 && (
        <button
          className="mt-3 text-brand-accent text-sm hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default SkillCard;
