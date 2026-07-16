import React from "react";
import type { Alert } from "../../data/types";

interface AlertBannerProps {
  alerts: Alert[];
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="bg-timt-bg shadow-[0_1px_3px_rgba(0,0,0,0.1)] ">
      <div
        className={`w-full max-w-7xl mx-auto h-16 flex justify-between items-center`}
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div className="h-full bg-timt-bg flex flex-col justify-center px-10 pr-6 z-10 relative shrink-0">
          <span className="text-sm font-bold text-timt-primary">
            Aviso <br />
            Importante:
          </span>
        </div>

        <div className="flex-1 overflow-hidden relative h-full flex items-center">
          <div
            className="flex whitespace-nowrap absolute"
            style={{
              paddingLeft: "100%",
              animation: "scroll 30s linear infinite",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {alerts.map((alert, index) => (
              <div key={alert.id || index} className="flex items-center gap-2 mr-16">
                <span className="text-sm font-bold">{alert.title}</span>
                <span className="text-sm font-medium">{alert.message}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateY(-50%) translateX(0); }
            100% { transform: translateY(-50%) translateX(-100%); }
          }
        `}</style>
      </div>
    </div>
  );
};
