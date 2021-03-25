import React from "react";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import Slider from "@material-ui/core/Slider";

type QNumControlProps = {
  amount: number;
  onChange: any;
};

const StyledLabel = styled(InputLabel)`
  && {
    color: #003249;
    font-size: 16px;
  }
`;

const StyledSlider = styled(Slider)`
  && {
    color: #003249;
    font-size: 16px;
  }
  .MuiSlider-markLabelActive {
    color: #003249;
  }
`;

const marks = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 30,
    label: "30",
  },
];

const styles = {
  labelRoot: {
    fontSize: "22px",
    color: "#003249",
    fontFamily: "'Roboto', sans-serif",
    "&$focused": {
      color: "yellow",
    },
  },
  sliderRoot: {
    color: "#003249",
  },
};

const QNumControl = (props: QNumControlProps): JSX.Element => {
  const { onChange } = props;

  const handleAmount = (ev: any, value: any) => {
    onChange(value);
  };

  return (
    <div>
      <StyledLabel shrink={true}>Questions</StyledLabel>
      <StyledSlider
        defaultValue={5}
        step={5}
        min={5}
        max={30}
        marks={marks}
        onChangeCommitted={handleAmount}
        valueLabelDisplay="off"
      />
    </div>
  );
};
export default QNumControl;
