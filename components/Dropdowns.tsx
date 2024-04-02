import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Dropdowns = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger className="hover:text-purple-500">
          Hover
        </HoverCardTrigger>
        <HoverCardContent className="absolute top-6 right-6">
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Dropdowns;
