import * as React from "react";

interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <article className="flex flex-col flex-1 items-center text-center max-sm:w-full">
      <p className="mb-2 text-8xl font-medium text-white leading-[124.8px] max-md:text-7xl max-sm:text-6xl">
        {value}
      </p>
      <p className="text-2xl font-medium leading-8 text-zinc-400 max-md:text-xl max-sm:text-lg">
        {label}
      </p>
    </article>
  );
};
