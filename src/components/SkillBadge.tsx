import React from "react";

const SkillBadge = ({ text }: { text: string }) => {
  return (
    <div className="text-xs text-[#fafafa] bg-black leading-none max-w-fit shadow-md font-semibold px-2.5 py-1 rounded-full">
      {text}
    </div>
  );
};

export default SkillBadge;
