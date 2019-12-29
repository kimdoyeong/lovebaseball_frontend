import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { IPeople } from "./playerInterfaces";
import makeEmojiResponsive from "../../../lib/functions/makeEmojiResponsive";
import { countAwards, isHOF } from "./utils";
import { middleDesktop, largeMobile } from "../../../lib/viewport";

interface RecordsProps {
  player: IPeople;
}

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;
const Card = styled.div`
  width: 300px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  padding: 2em;
  box-sizing: border-box;
  margin: 1em 2em;

  ${middleDesktop.min(css`
    width: 500px;
  `)}

  .title {
    margin-bottom: 0.33em;
    font-size: 3em;
    text-align: center;
    margin-top: 0;

    ${largeMobile.max(css`
      font-size: 2.5em;
    `)}
  }
  .emoji {
    font-size: 10em;
    text-align: center;
  }
  .sub {
    font-size: 1.5em;
    text-align: center;
    margin-top: 1em;
  }
`;

function RecordCard({
  title,
  emoji,
  sub
}: {
  title: string;
  emoji: string;
  sub: string;
}) {
  const Emoji = makeEmojiResponsive(emoji, title);
  return (
    <Card>
      <h1 className="title">{title}</h1>
      <div className="emoji">
        <Emoji />
      </div>
      <div className="sub">{sub}</div>
    </Card>
  );
}
function Records({ player }: RecordsProps) {
  const awards = useMemo(() => countAwards(player.awards), [player.awards]);
  const isHof = useMemo(() => isHOF(player.awards), [player.awards]);

  return (
    <CardList>
      {awards?.mvp.length && (
        <RecordCard
          title="MVP"
          emoji="🏆"
          sub={awards.mvp.map(v => v?.league + " " + v.season).join(", ")}
        />
      )}
      {isHof && <RecordCard title="명예의 전당" emoji="👑" sub={isHof.date} />}
    </CardList>
  );
}

export default Records;
