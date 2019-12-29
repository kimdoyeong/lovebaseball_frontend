import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  & > * {
    margin-bottom: 72px;
  }
`;
function FullSizePlayerList() {
  return <Wrap></Wrap>;
}

export default FullSizePlayerList;
