"use client";

import React from "react";

import addRequestFlowSVG from "./add-request-flow.svg";

const Page = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>Request manager</div>
      <SVGImageZoomer svg={addRequestFlowSVG} />
    </div>
  );
};

const SCALE = 3;
const ZOOM_DIMENSION = 200;

const SVGImageZoomer = ({ svg }: { svg: React.ReactNode }) => {
  const imageRef = React.useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = React.useState<null | {
    imageX: number;
    imageY: number;
    pageX: number;
    pageY: number;
  }>(null);

  console.log({ addRequestFlowSVG });

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={imageRef}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const { pageX, pageY } = e;
          if (!imageRef.current) {
            return;
          }
          const rect = imageRef.current.getBoundingClientRect();
          setPosition({
            imageX: pageX - rect.left - window.scrollX,
            imageY: pageY - rect.top - window.scrollY,
            pageX: pageX - window.scrollX,
            pageY: pageY - window.scrollY,
          });
        }}
        onMouseLeave={() => {
          setPosition(null);
        }}
        style={{
          backgroundImage: `url("${addRequestFlowSVG.src}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: addRequestFlowSVG.width,
          height: addRequestFlowSVG.height,
        }}
      />
      {position ? (
        <div
          style={{
            backgroundColor: "black",
            backgroundImage: `url("${addRequestFlowSVG.src}")`,
            width: ZOOM_DIMENSION,
            height: ZOOM_DIMENSION,
            position: "fixed",
            left: position.pageX - ZOOM_DIMENSION / 2,
            top: position.pageY - ZOOM_DIMENSION / 2,
            pointerEvents: "none",

            backgroundPositionX: -position.imageX * SCALE + ZOOM_DIMENSION / 2,
            backgroundPositionY: -position.imageY * SCALE + ZOOM_DIMENSION / 2,
            backgroundRepeat: "no-repeat",

            backgroundSize: `${addRequestFlowSVG.width * SCALE}px ${
              addRequestFlowSVG.height * SCALE
            }px`,
            borderRadius: 16,
            border: "2px solid white",
          }}
        />
      ) : null}
    </div>
  );
};

export default Page;
