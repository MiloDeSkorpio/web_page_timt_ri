import React from "react";
import { AnimatedNumber } from "./AnimatedNumber";

export interface StatItem {
  id: number;
  value: number;
  duration?: number;
  prefix?: string;
  unit: string;
  label: string;
}

interface StatsRowProps {
  stats: StatItem[];
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-around items-center p-10 gap-8 rounded-lg text-center">
        {stats.map((stat) => (
          <div key={stat.id}>
            <p className="mb-2 text-5xl font-bold text-gray-700">
              {stat.prefix}
              <AnimatedNumber
                endValue={stat.value}
                duration={stat.duration || 2000}
              />{" "}
              <span className="text-timt-primary">{stat.unit}</span>
            </p>
            <h2 className="text-lg font-medium tracking-wide text-gray-700">
              {stat.label}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
