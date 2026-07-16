import React from "react";
import type { LucideProps } from "lucide-react";
import { 
  CreditCard, 
  Banknote, 
  Clock, 
  ShieldAlert, 
  HandHelping, 
  Ban, 
  AlertTriangle,
  HelpCircle 
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

const IconMap: Record<string, React.FC<LucideProps>> = {
  CreditCard,
  Banknote,
  Clock,
  ShieldAlert,
  HandHelping,
  Ban,
  AlertTriangle,
  HelpCircle
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const Icon = IconMap[name] || HelpCircle;
  return <Icon {...props} />;
};
