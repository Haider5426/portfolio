import { ImageResponse } from "next/og";

export const alt = "Haider Khan — Data Analyst & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F7F7F2";
const INK = "#1B1F23";
const INK_SOFT = "#565D64";
const GRID = "#DADFE3";
const RAW = "#2A6F97";
const MODEL = "#C98A2C";
const SHIP = "#3B7A57";

const STAGES = [
  { label: "RAW", color: RAW },
  { label: "CLEAN", color: RAW },
  { label: "MODEL", color: MODEL },
  { label: "SHIP", color: SHIP },
];

/**
 * The brand face is IBM Plex Mono. Satori needs the actual font bytes, so we
 * fetch them at build time — and fall back to the default face rather than
 * failing the build if the network is unavailable.
 */
async function loadPlexMono(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => (r.ok ? r.text() : ""));
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const plex = await loadPlexMono();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          padding: "68px 72px",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: RAW,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              color: INK,
              letterSpacing: 2,
              fontWeight: 700,
              display: "flex",
            }}
          >
            HAIDER.KHAN
          </div>
        </div>

        {/* Thesis */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.05,
              color: INK,
              fontWeight: 700,
              letterSpacing: -1,
              display: "flex",
            }}
          >
            Raw data in.
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.05,
              color: INK,
              fontWeight: 700,
              letterSpacing: -1,
              display: "flex",
            }}
          >
            Shipped&nbsp;<span style={{ color: RAW }}>product</span>&nbsp;out.
          </div>
          <div
            style={{
              fontSize: 27,
              color: INK_SOFT,
              marginTop: 26,
              display: "flex",
            }}
          >
            Data Analyst &amp; Software Engineer · Riyadh · 100+ projects
          </div>
        </div>

        {/* Pipeline motif */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {STAGES.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 999,
                    background: s.color,
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    fontSize: 21,
                    color: INK_SOFT,
                    letterSpacing: 2,
                    display: "flex",
                  }}
                >
                  {s.label}
                </div>
              </div>
              {i < STAGES.length - 1 && (
                <div style={{ fontSize: 20, color: GRID, display: "flex" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: plex
        ? [{ name: "IBM Plex Mono", data: plex, style: "normal", weight: 700 }]
        : [],
    }
  );
}
