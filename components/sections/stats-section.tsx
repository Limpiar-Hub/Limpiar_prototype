"use client";
import * as React from "react";
import { StatItem } from ".//stat-item";
import { Divider } from "./divider";

export default function StatsSection() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <section className="flex justify-between  items-center px-0 py-20 w-full bg-black max-md:px-5 max-md:py-16 max-sm:flex-col max-sm:gap-10 max-sm:px-5 max-sm:py-10">
        <StatItem value="30%" label="Average cost savings" />
        <Divider />
        <StatItem value="10k" label="Service Providers in Network" />
        <Divider />
        <StatItem value="336" label="Hours Saved" />
      </section>
    </>
  );
}
