import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { StylesProvider } from "@material-ui/core/styles";

type DifficultyControlProps = {
  onChange: any;
};

const StyledControl = styled(FormControl)`
  && {
    font-size: 22px;
    color: #003249;
    font-family: "Roboto", sans-serif;
  }
`;

const StyledSelect = styled(Select)`
  && {
    color: #003249;
    font-size: 16px;
  }
  .MuiSelect-selectMenu {
    color: #003249;
  }
`;

const StyledLabel = styled(InputLabel)`
  && {
    color: #003249;
    font-size: 16px;
  }
`;

const DifficultyControl = (props: DifficultyControlProps): JSX.Element => {
  const { onChange } = props;
  const [diffValue, setDiffValue] = useState<string>("easy");

  const handleDiff = (ev: any) => {
    onChange(ev.target.value);
    setDiffValue(ev.target.value);
  };

  return (
    <>
      <StylesProvider injectFirst>
        <StyledControl>
          <StyledLabel focused={false}>Difficulty</StyledLabel>
          <StyledSelect value={diffValue} onChange={handleDiff}>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </StyledSelect>
        </StyledControl>
      </StylesProvider>
    </>
  );
};

export default DifficultyControl;
