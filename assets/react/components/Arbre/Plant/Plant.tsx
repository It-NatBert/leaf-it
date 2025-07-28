import React from "react";

type PlantIconProps = {
  scale?: number;
  centered?: boolean;
};

export default function PlantIcon({ scale = 1, centered = false }: PlantIconProps) {
  const centerOffsetX = 47.25;
  const centerOffsetY = 40;

  return (
    <g transform={`scale(${scale}) ${centered ? `translate(${-centerOffsetX}, ${-centerOffsetY})` : ""}`}>
      <defs>
        <style>
          {
            ".st0{fill:transparent;stroke:#50AA5B;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px}"
          }
        </style>
      </defs>
      <path
        d="M47.59 29.75c-.14.63-.25 1.26-.34 1.89 1.77.86 3.66 1.53 5.66 1.98 13.83 3.07 27.52-5.66 30.58-19.48.3-1.34.48-2.68.56-4a28.59 28.59 0 0 0-3.85-1.16c-14.75-3.27-29.35 6.03-32.62 20.78ZM9.94 12.96c-.14-.62-.25-1.25-.34-1.87 1.8-.86 3.73-1.54 5.77-1.99 14.06-3.12 27.93 5.46 30.97 19.16.29 1.33.47 2.65.55 3.97-1.26.47-2.56.87-3.92 1.17-15 3.33-29.79-5.83-33.02-20.44ZM13.42 77.68c10.52-5.85 21.77-9.03 33.46-9.03s22.95 3.17 33.47 9.03M47.25 31.36v37.29"
        className="st0"
      />
    </g>
  );
}