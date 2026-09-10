import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Rohit Mandavkar — Web Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: -0.02,
            lineHeight: 1.1,
          }}
        >
          Rohit Mandavkar
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#a1a1aa" }}>
          Web Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
