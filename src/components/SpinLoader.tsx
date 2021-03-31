import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

type SpinnerProps = {
  type:
    | "Audio"
    | "BallTriangle"
    | "Bars"
    | "Circles"
    | "Grid"
    | "Hearts"
    | "Oval"
    | "Puff"
    | "Rings"
    | "TailSpin"
    | "ThreeDots"
    | "Watch"
    | "RevolvingDot"
    | "Triangle"
    | "Plane"
    | "MutatingDots"
    | "CradleLoader";
  color: string;
  height: number;
  width: number;
  timeout: number;
};

export const SpinLoader: React.FC<SpinnerProps> = ({
  type,
  color,
  height,
  width,
  timeout,
}) => {
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout}
    />
  );
};

export default SpinLoader;
