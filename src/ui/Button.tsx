import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = "",
  type = "button",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm gap-2",
    md: "px-6 py-2.5 gap-3",
    lg: "px-8 py-3 text-lg gap-4",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const baseClasses =
    `group inline-flex text-white font-semibold bg-timt-primary hover:text-timt-primary hover:bg-white border border-timt-primary rounded-full items-center justify-center transition-all duration-300 shadow-[0_0_8px_rgba(129,49,47,0.5)] hover:shadow-[0_0_8px_rgba(129,49,47,0.5)] ${sizeClasses[size]}`;

  const icon = (
    <svg
      className={`${iconSizes[size]} shrink-0 transition-transform group-hover:translate-x-1`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        className="fill-white stroke-timt-primary group-hover:fill-timt-primary group-hover:stroke-white transition-colors duration-300"
        strokeWidth="1.5"
      />
      <path
        d="M13 15L16 12M16 12L13 9M16 12H8"
        className="stroke-timt-primary group-hover:stroke-white transition-colors duration-300"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`} onClick={onClick}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseClasses} ${className}`} onClick={onClick}>
      <span>{children}</span>
      {icon}
    </button>
  );
};
