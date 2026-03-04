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
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16/8",
          border: "1px solid rgba(0,255,178,0.15)",
          borderBottom: "none",
          background: "#060d10",
        }}
      >
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent z-10" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent z-10" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent z-10" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent z-10" />

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
          className="absolute pointer-events-none rounded-full"
          style={{
            top: "50%",
            left: "50%",
            width: "70%",
            aspectRatio: "1",
            transform: "translate(-50%,-50%)",
            background:
              "radial-gradient(circle, rgba(0,255,178,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Scanline */}
        <div
          className="absolute left-0 right-0 pointer-events-none sitl-scan"
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,178,0.15), transparent)",
          }}
        />

        {/* Radar */}
        <div
          className="absolute rounded-full max-md:w-[140px] max-md:h-[140px]"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "260px",
            height: "260px",
            border: "1px solid rgba(0,255,178,0.12)",
          }}
        >
          {/* Inner rings */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid rgba(0,255,178,0.08)",
              transform: "scale(0.66)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid rgba(0,255,178,0.08)",
              transform: "scale(0.33)",
            }}
          />
          {/* Sweep line */}
          <div
            className="absolute sitl-sweep"
            style={{
              top: "50%",
              left: "50%",
              width: "50%",
              height: "1px",
              transformOrigin: "left center",
              background: "linear-gradient(90deg, #00ffb2, transparent)",
              boxShadow: "0 0 8px #00ffb2",
            }}
          >
            <div
              className="absolute"
              style={{
                top: "-60px",
                left: "0",
                width: "100%",
                height: "120px",
                transformOrigin: "left center",
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

        {/* Drones - using inline styles for initial position + z-index */}
        <div
          className="sitl-drone sitl-drone--default sitl-d1"
          style={{ left: "20%", top: "30%", zIndex: 5 }}
        />
        <div
          className="sitl-drone sitl-drone--blue sitl-d2"
          style={{ left: "75%", top: "25%", zIndex: 5 }}
        />
        <div
          className="sitl-drone sitl-drone--default sitl-d3"
          style={{ left: "50%", top: "50%", zIndex: 5 }}
        />
        <div
          className="sitl-drone sitl-drone--hostile sitl-d4"
          style={{ left: "15%", top: "60%", zIndex: 5 }}
        />
        <div
          className="sitl-drone sitl-drone--default sitl-d5"
          style={{ left: "88%", top: "70%", zIndex: 5 }}
        />

        {/* HUD overlays */}
        <div className="absolute top-3.5 left-[18px] font-mono text-[9px] text-accent opacity-70 leading-[1.7] max-md:hidden z-10">
          SIM_ENV: ACTIVE
          <br />
          FRAME: <span ref={frameRef}>00000</span>
          <br />
          AGENTS: 05
        </div>
        <div className="absolute top-3.5 right-[18px] font-mono text-[9px] text-accent opacity-70 leading-[1.7] text-right max-md:hidden z-10">
          SCENARIO: URBAN_SWEEP
          <br />
          LATENCY: 0ms
          <br />
          MODE: SITL
        </div>
        <div className="absolute bottom-3.5 left-[18px] font-mono text-[9px] text-accent opacity-70 leading-[1.7] max-md:hidden z-10">
          ALT: 120M AGL
          <br />
          WIND: 3.2 M/S NW
        </div>
        <div className="absolute bottom-3.5 right-[18px] font-mono text-[9px] text-accent opacity-70 leading-[1.7] text-right max-md:hidden z-10">
          THREAT: DETECTED
          <br />
          INTERCEPT: CALC...
        </div>
      </div>

      {/* Bottom Panel */}
      <div
        className="w-full grid gap-6 items-end max-md:grid-cols-1 max-md:p-6"
        style={{
          background: "#070f12",
          border: "1px solid rgba(0,255,178,0.15)",
          padding: "36px 48px 40px",
          gridTemplateColumns: "1fr auto",
        }}
      >
        <div className="text-left">
          <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase mb-3.5 flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full sitl-blink"
              style={{
                background: "#00ffb2",
                boxShadow: "0 0 8px #00ffb2",
              }}
            />
            Plug &amp; Play SITL Simulation
          </div>
          <h2
            className="font-heading tracking-[0.04em] leading-[0.95] text-foreground"
            style={{
              fontSize: "clamp(36px, 5.5vw, 68px)",
              marginBottom: "18px",
            }}
          >
            Build Any Scenario.
            <br />
            <span className="text-accent">Throw Your System</span>
            <br />
            Into It.
          </h2>
          <p
            className="font-sans max-w-[520px] leading-[1.65]"
            style={{
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: "rgba(212,245,236,0.4)",
            }}
          >
            <strong className="font-bold" style={{ color: "#d4f5ec" }}>
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
      <div
        className="w-full overflow-hidden whitespace-nowrap font-mono text-[9px] tracking-[0.1em]"
        style={{
          borderTop: "1px solid rgba(0,255,178,0.08)",
          background: "#040a0d",
          padding: "10px 18px",
          color: "rgba(0,255,178,0.45)",
        }}
      >
        <span className="sitl-ticker">
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

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="text-right pr-4 max-md:text-center max-md:border-r-0 max-md:pr-0"
      style={{ borderRight: "2px solid rgba(0,255,178,0.2)" }}
    >
      <div className="font-heading text-[32px] text-accent leading-none tracking-[0.04em]">
        {value}
      </div>
      <div
        className="font-mono text-[8px] tracking-[0.12em] uppercase mt-0.5"
        style={{ color: "rgba(212,245,236,0.4)" }}
      >
        {label}
      </div>
    </div>
  );
}
