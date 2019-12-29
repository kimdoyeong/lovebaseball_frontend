import React from "react";
import { IPeople } from "./playerInterfaces";
import FullSizePlayer from "../FullSizePlayer";
import styled from "styled-components";

const Wrap = styled.div``;

interface PlayerPageProps {
  player: {
    player: IPeople;
  };
}
function PlayerPage({ player: { player } }: PlayerPageProps) {
  return (
    <Wrap>
      <FullSizePlayer player={player} />
    </Wrap>
  );
}

export default PlayerPage;
