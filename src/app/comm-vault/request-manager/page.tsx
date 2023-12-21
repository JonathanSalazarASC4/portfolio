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
const ZOOM_DIMENSION = 400;

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
            imageX: pageX - rect.left - window.scrollX - ZOOM_DIMENSION / 2,
            imageY: pageY - rect.top - window.scrollY - ZOOM_DIMENSION / 2,
            pageX: pageX - window.scrollX - ZOOM_DIMENSION / 2,
            pageY: pageY - window.scrollY - ZOOM_DIMENSION / 2,
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
            left: position.pageX,
            top: position.pageY,
            pointerEvents: "none",

            backgroundPositionX: -position.imageX * SCALE,
            backgroundPositionY: -position.imageY * SCALE,
            backgroundRepeat: "no-repeat",

            backgroundSize: `${addRequestFlowSVG.width * SCALE}px ${
              addRequestFlowSVG.height * SCALE
            }px`,
          }}
        />
      ) : null}
    </div>
  );
};

export default Page;
