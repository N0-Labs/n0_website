"use client";

import { useEffect, useRef } from "react";

export function SitlSimulation() {
  const frameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let f = 0;
    const interval = setInterval(() => {
      f++;
      if (frameRef.current) {
        frameRef.current.textContent = String(f).padStart(5, "0");
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-20 max-md:mt-14">
      {/* Simulation Canvas */}
      <div className="relative w-full aspect-[16/8] border border-[rgba(0,255,178,0.15)] border-b-0 bg-[#060d10] overflow-hidden">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00ffb2]" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00ffb2]" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00ffb2]" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00ffb2]" />

        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,180,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[70%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,178,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Scanline */}
        <div
          className="absolute left-0 right-0 h-[2px] pointer-events-none animate-[scan_4s_linear_infinite]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,178,0.15), transparent)",
          }}
        />

        {/* Radar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] max-md:w-[140px] max-md:h-[140px] rounded-full border border-[rgba(0,255,178,0.12)]">
          {/* Inner rings */}
          <div className="absolute inset-0 rounded-full border border-[rgba(0,255,178,0.08)] scale-[0.66]" />
          <div className="absolute inset-0 rounded-full border border-[rgba(0,255,178,0.08)] scale-[0.33]" />
          {/* Sweep line */}
          <div
            className="absolute top-1/2 left-1/2 w-1/2 h-[1px] origin-left animate-[sweep_3s_linear_infinite]"
            style={{
              background: "linear-gradient(90deg, #00ffb2, transparent)",
              boxShadow: "0 0 8px #00ffb2",
            }}
          >
            <div
              className="absolute -top-[60px] left-0 w-full h-[120px] origin-left"
              style={{
                background:
                  "conic-gradient(from -30deg, rgba(0,255,178,0.12), transparent 60deg)",
              }}
            />
          </div>
        </div>

        {/* SVG paths */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 960 480"
          preserveAspectRatio="none"
        >
          <path
            d="M192,144 Q432,96 672,192 Q528,312 192,144"
            stroke="rgba(0,255,178,0.07)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
          <path
            d="M720,120 Q576,264 288,336"
            stroke="rgba(0,207,255,0.07)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
          <path
            d="M144,288 Q384,192 624,360"
            stroke="rgba(255,107,53,0.07)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Drones */}
        <Drone className="animate-[move1_8s_linear_infinite]" />
        <Drone
          variant="blue"
          className="animate-[move2_11s_linear_infinite]"
        />
        <Drone className="animate-[move3_9s_linear_infinite]" />
        <Drone
          variant="hostile"
          className="animate-[move4_7s_linear_infinite]"
          style={{ animationDelay: "-3s" }}
        />
        <Drone
          className="animate-[move5_13s_linear_infinite]"
          style={{ animationDelay: "-5s" }}
        />

        {/* HUD overlays */}
        <div className="absolute top-3.5 left-[18px] font-mono text-[9px] text-[#00ffb2] opacity-70 leading-[1.7] max-md:hidden">
          SIM_ENV: ACTIVE
          <br />
          FRAME: <span ref={frameRef}>00000</span>
          <br />
          AGENTS: 05
        </div>
        <div className="absolute top-3.5 right-[18px] font-mono text-[9px] text-[#00ffb2] opacity-70 leading-[1.7] text-right max-md:hidden">
          SCENARIO: URBAN_SWEEP
          <br />
          LATENCY: 0ms
          <br />
          MODE: SITL
        </div>
        <div className="absolute bottom-3.5 left-[18px] font-mono text-[9px] text-[#00ffb2] opacity-70 leading-[1.7] max-md:hidden">
          ALT: 120M AGL
          <br />
          WIND: 3.2 M/S NW
        </div>
        <div className="absolute bottom-3.5 right-[18px] font-mono text-[9px] text-[#00ffb2] opacity-70 leading-[1.7] text-right max-md:hidden">
          THREAT: DETECTED
          <br />
          INTERCEPT: CALC...
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="w-full bg-[#070f12] border border-[rgba(0,255,178,0.15)] p-9 pb-10 grid grid-cols-[1fr_auto] gap-6 items-end max-md:grid-cols-1 max-md:p-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] text-[#00ffb2] uppercase mb-3.5 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ffb2] shadow-[0_0_8px_#00ffb2] animate-[blink_1.4s_ease-in-out_infinite]" />
            Plug & Play SITL Simulation
          </div>
          <h2 className="font-heading text-[clamp(36px,5.5vw,68px)] tracking-[0.04em] leading-[0.95] text-foreground mb-[18px]">
            Build Any Scenario.
            <br />
            <span className="text-[#00ffb2]">Throw Your System</span>
            <br />
            Into It.
          </h2>
          <p className="text-[clamp(13px,1.5vw,15px)] font-light text-[rgba(212,245,236,0.4)] max-w-[520px] leading-[1.65]">
            <strong className="text-[#d4f5ec] font-medium">
              Without a second{"'"}s notice.
            </strong>{" "}
            Drop your autonomy stack into any simulated environment — urban,
            maritime, contested airspace — and iterate at the speed of thought.
            <br />
            <br />
            {"10\u00D7"} your autonomy development time.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-w-[140px] max-md:flex-row max-md:justify-around max-md:min-w-0">
          <StatItem value="10\u00D7" label="Dev Velocity" />
          <StatItem value="0ms" label="Sim Latency" />
          <StatItem value="\u221E" label="Scenarios" />
        </div>
      </div>

      {/* Ticker strip */}
      <div className="w-full border-t border-[rgba(0,255,178,0.08)] bg-[#040a0d] py-2.5 px-[18px] overflow-hidden whitespace-nowrap font-mono text-[9px] text-[rgba(0,255,178,0.45)] tracking-[0.1em]">
        <span className="inline-block animate-[ticker_20s_linear_infinite]">
          SCENARIO_LOADED: URBAN_SWEEP &nbsp;&middot;&nbsp; AGENT_CONNECTED
          &nbsp;&middot;&nbsp; MISSION: ACTIVE &nbsp;&middot;&nbsp;
          THREAT_DETECTED: BEARING 042 &nbsp;&middot;&nbsp; INTERCEPT_ROUTE:
          CALC &nbsp;&middot;&nbsp; WAYPOINT_REACHED: 4/7 &nbsp;&middot;&nbsp;
          WIND_UPDATE: 3.4 M/S &nbsp;&middot;&nbsp; SWARM_SYNC: OK
          &nbsp;&middot;&nbsp; PAYLOAD_ARM: READY
          &nbsp;&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCENARIO_LOADED:
          URBAN_SWEEP &nbsp;&middot;&nbsp; AGENT_CONNECTED &nbsp;&middot;&nbsp;
          MISSION: ACTIVE &nbsp;&middot;&nbsp; THREAT_DETECTED: BEARING 042
          &nbsp;&middot;&nbsp; INTERCEPT_ROUTE: CALC &nbsp;&middot;&nbsp;
          WAYPOINT_REACHED: 4/7 &nbsp;&middot;&nbsp; WIND_UPDATE: 3.4 M/S
          &nbsp;&middot;&nbsp; SWARM_SYNC: OK &nbsp;&middot;&nbsp; PAYLOAD_ARM:
          READY &nbsp;&middot;&nbsp;
        </span>
      </div>
    </div>
  );
}

function Drone({
  variant = "default",
  className = "",
  style,
}: {
  variant?: "default" | "hostile" | "blue";
  className?: string;
  style?: React.CSSProperties;
}) {
  const colors = {
    default: {
      bg: "#00ffb2",
      shadow: "0 0 12px #00ffb2, 0 0 24px rgba(0,255,178,0.4)",
      border: "rgba(0,255,178,0.5)",
    },
    hostile: {
      bg: "#ff6b35",
      shadow: "0 0 12px #ff6b35, 0 0 24px rgba(255,107,53,0.4)",
      border: "rgba(255,107,53,0.5)",
    },
    blue: {
      bg: "#00cfff",
      shadow: "0 0 12px #00cfff, 0 0 24px rgba(0,207,255,0.4)",
      border: "rgba(0,207,255,0.5)",
    },
  };
  const c = colors[variant];
  return (
    <div
      className={`absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        backgroundColor: c.bg,
        boxShadow: c.shadow,
        ...style,
      }}
    >
      <span
        className="absolute -inset-1 rounded-full animate-[ping2_2s_ease-out_infinite]"
        style={{ border: `1px solid ${c.border}` }}
      />
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right border-r-2 border-[rgba(0,255,178,0.2)] pr-4 max-md:text-center max-md:border-r-0 max-md:border-b-0 max-md:pr-0">
      <div className="font-heading text-[32px] text-[#00ffb2] leading-none tracking-[0.04em]">
        {value}
      </div>
      <div className="font-mono text-[8px] tracking-[0.12em] uppercase text-[rgba(212,245,236,0.4)] mt-0.5">
        {label}
      </div>
    </div>
  );
}
