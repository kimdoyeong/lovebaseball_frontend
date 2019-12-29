import React from "react";
import { IPeople } from "./playerInterfaces";
import FullSizePlayer from "../FullSizePlayer";
import styled from "styled-components";
import Records from "./Records";
import Stats from "./Stats";

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
      <Records player={player} />
      <Stats player={player} />
    </Wrap>
  );
}

export default PlayerPage;
