import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0c2635 0%,#173d4e 62%,#bf7959 100%)", color: "#f7f4ee", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", fontFamily: "Arial, sans-serif" }}><div style={{ display: "flex", fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#d4ab8f" }}>Independent trademark information</div><div style={{ display: "flex", flexDirection: "column", gap: 22 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 70, lineHeight: 1.04, fontWeight: 700 }}><span>Trademark</span><span>Infringement Attorney</span></div><div style={{ display: "flex", fontSize: 25, color: "#d9e1e1" }}>Explore a clear next step.</div></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}><span>TrademarkInfringementAttorney.com</span><span>Not a law firm · Not legal advice</span></div></div>, size);
}
