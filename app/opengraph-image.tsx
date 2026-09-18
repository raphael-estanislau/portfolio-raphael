import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/content";

export const runtime = "edge";
export const alt = `${PROFILE.name} · Software, dados e IA aplicada`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#08090C",
          color: "#F3F5F9",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "ui-monospace, monospace",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#A8C7E8",
          }}
        >
          <div style={{ width: 10, height: 10, background: "#A8C7E8" }} />
          Software, dados e IA aplicada
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 62, lineHeight: 1.08, letterSpacing: -1.5 }}>
            Construo aplicações que conectam dados, APIs e modelos de linguagem a
            problemas reais de negócio.
          </div>
          <div style={{ display: "flex", height: 1, background: "#2A3040" }} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "ui-monospace, monospace",
            fontSize: 22,
            color: "#6C7484",
          }}
        >
          <div style={{ display: "flex", color: "#F3F5F9", letterSpacing: 2 }}>
            {PROFILE.name}
          </div>
          <div style={{ display: "flex" }}>
            Copiloto de CRM · Operação omnichannel · Oriba Intelligence
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
