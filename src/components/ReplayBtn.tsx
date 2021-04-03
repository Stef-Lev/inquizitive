import React from "react";
import styled from "styled-components";
import ReplayIcon from "@material-ui/icons/Replay";

type ReplayBtnProps = {
  onClick: () => void;
};

const Button = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding:16px;
    border-radius: 50%;
    position: absolute;
    bottom: 22px;
    right: 22px;
    color: #003249;
    background-color: #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    :hover {
      cursor: pointer;
    }
    :active {
      background-color: #ff795e;
      color: #fff;
    }
`

function ReplayBtn(props: ReplayBtnProps): JSX.Element {
  const { onClick } = props;
  return (
    <Button onClick={onClick}>
      <ReplayIcon/>
    </Button>)
}

export default ReplayBtn;

