import React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  layout?: "row" | "column" | "gradient";
  button?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  layout = "row",
  button,
}) => {
  if (layout === "gradient") {
    return (
      <div className="bg-linear-to-br from-timt-secondary/10 to-timt-secondary-dark/40 rounded-2xl shadow-md p-6 flex flex-col h-full hover:shadow-xl transition-shadow border border-timt-secondary/30">
        <div className="w-8 h-8 mb-4 opacity-80 text-timt-primary">{icon}</div>
        <h2 className="text-lg font-bold text-gray-700 mb-3">{title}</h2>
        <div className="text-gray-600 text-sm leading-relaxed mt-2">
          {description}
        </div>
      </div>
    );
  }

  if (layout === "column") {
    return (
      <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
        <div className="w-16 h-16 shrink-0 text-timt-primary">{icon}</div>
        <div className="text-left mt-2">
          <h2 className="text-xl font-bold text-timt-primary mb-1">{title}</h2>
          <div className="text-gray-700 leading-relaxed">{description}</div>
        </div>
      </div>
    );
  }

  // row (default)
  return (
    <div className="flex flex-row items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
      <div className="w-14 h-14 shrink-0 text-timt-primary">{icon}</div>
      <div className="flex-1">
        <h2 className="mb-2 text-xl font-bold text-timt-text">{title}</h2>
        <div className="text-gray-600">{description}</div>
        {button && <div className="mt-4">{button}</div>}
      </div>
    </div>
  );
};
