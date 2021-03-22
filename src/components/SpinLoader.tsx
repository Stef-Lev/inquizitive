import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

type SpinnerProps = {
    type: string | any;
    color: string;
    height: number;
    width: number;
    timeout: number;
};

export const SpinLoader: React.FC<SpinnerProps> = ({ type, color, height, width, timeout }) => {
    return (
        <Loader
            type={type}
            color={color}
            height={height}
            width={width}
            timeout={timeout}
        />
    )
}

export default SpinLoader;
