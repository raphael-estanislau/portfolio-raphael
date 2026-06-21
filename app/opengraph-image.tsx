import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/content";

export const runtime = "edge";
export const alt = `${PROFILE.name} · Data Science & AI`;
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
          background: "#0A1120",
          color: "#E4EAF7",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#5EEAD4",
            }}
          />
          <span style={{ color: "#5EEAD4", fontSize: 28 }}>Data Science & AI</span>
        </div>

        <div>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
            {PROFILE.name}
          </div>
          <div style={{ marginTop: 20, fontSize: 34, color: "#C6D2EC", maxWidth: 900 }}>
            Transformo dados em decisão · Grupo Shoulder
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, color: "#8A99B8", fontSize: 24 }}>
          <span>CRM · BigQuery · Visual Merchandising</span>
        </div>
      </div>
    ),
    size
  );
}
