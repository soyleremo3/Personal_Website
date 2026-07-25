import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0D",
          borderRadius: 6,
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -0.5,
          color: "#E8A33D",
          fontFamily: "monospace",
        }}
      >
        ES
      </div>
    ),
    { ...size },
  );
}
