import React from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  actions?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  openId?: string;
  onChange?: (id: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  openId,
  onChange,
}) => {
  return (
    <div className="w-full space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-timt-primary focus:ring-inset"
            onClick={() => onChange?.(item.id)}
            aria-expanded={openId === item.id}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openId === item.id ? "transform rotate-180" : ""}`}
            />
          </button>
          <div
            id={`faq-answer-${item.id}`}
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? "max-h-250 py-4 border-t border-gray-100 opacity-100" : "max-h-0 py-0 opacity-0"}`}
          >
            <div
              className="text-gray-600 max-w-none [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2 [&_li]:my-1 [&_strong]:font-bold [&_strong]:text-timt-primary"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
            {item.actions && (
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end">
                {item.actions}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
