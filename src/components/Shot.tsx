import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/**
 * Renders /public/<src> if the file exists, otherwise a labelled placeholder slot
 * telling you exactly what to drop in. Lets the site look finished before the art
 * lands, and upgrade itself the moment a file appears. Server component: the fs
 * check happens at build time, not in the browser.
 */
export function Shot({
  src,
  alt,
  width,
  height,
  note,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  note?: string;
  className?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (exists) {
    return (
      <Image
        src={`/${src}`}
        alt={alt}
        width={width}
        height={height}
        className={`neon-edge rounded-xl ${className}`}
      />
    );
  }

  return (
    <div
      className={`neon-edge flex flex-col items-center justify-center gap-1 rounded-xl bg-surface p-4 text-center ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <span className="text-[0.6rem] uppercase tracking-widest text-muted">
        drop in public/{src}
      </span>
      <span className="text-xs text-muted/70">
        {width}×{height}
        {note ? ` · ${note}` : ""}
      </span>
    </div>
  );
}
