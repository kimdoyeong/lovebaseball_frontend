import React from "react";
import styled from "styled-components";
import FullSizePlayer from "./FullSizePlayer";

const Wrap = styled.div`
  & > * {
    margin-bottom: 72px;
  }
`;
function FullSizePlayerList() {
  return (
    <Wrap>
      <FullSizePlayer />
      <FullSizePlayer />
    </Wrap>
  );
}

export default FullSizePlayerList;
