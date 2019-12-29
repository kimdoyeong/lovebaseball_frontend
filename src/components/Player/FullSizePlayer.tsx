import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import makeEmojiResponsive from "../../lib/functions/makeEmojiResponsive";
import {
  smallDesktop,
  middleDesktop,
  tablet,
  smallTablet,
  largeMobile
} from "../../lib/viewport";
import Button from "../Form/Button";
import Awards from "./Awards";
import {
  countAwards,
  translatePosition,
  getHeightAndWeightToSI,
  isHOF
} from "./PlayerPage/utils";
import { IPeople } from "./PlayerPage/playerInterfaces";

interface PlayerProps {
  playerId: number;
}
const Player = styled.div<PlayerProps>`
  width: 100%;
  .sub {
    color: #8e8e8e;
    margin: 0;
  }
  .row {
    display: flex;
    ${largeMobile.max(css`
      flex-direction: column;
    `)}
  }
  .top {
    display: flex;
    width: 100%;
    max-width: 100%;
    align-items: center;


    ${smallTablet.max(css`
      flex-direction: column;
    `)}
    .profile {
      width: 270px;
      height: 270px;
      border-radius: 135px;
      background: url(${props =>
        `https://securea.mlb.com/mlb/images/players/head_shot/${props.playerId}.jpg`});
      background-size: cover;
      background-position: center;

      ${middleDesktop.max(css`
        width: 250px;
        height: 250px;
        border-radius: 125px;
      `)}
      ${tablet.max(css`
        width: 150px;
        height: 150px;
        border-radius: 75px;
      `)}
      ${smallTablet.max(css`
        width: 100%;
        height: 200px;
        border-radius: 0;
      `)}
    }
    .info {
      margin-left: 1.5em;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      flex: 1;
      ${tablet.max(css`
        margin-top: 1em;
      `)}
      ${largeMobile.max(css`
        margin-left: 0;
      `)}

      .personality {
        .hof {
          margin: 0;
        }
        .team {
          font-size: 1em;
          margin: 0;
          color: #8e8e8e;
        }
        .name {
          margin: 0;
          font-size: 2em;
          word-break: keep-all;
          white-space: nowrap;
        }
      }
      .awards-button {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        ${smallDesktop.min(css`
          display: none;
        `)}
        ${largeMobile.max(css`
          display: block;
          margin-top: 1em;
        `)}
      }
      .awardsWrap {
        margin-left: 3em;
        display: flex;
        .close {
          display: none;
          cursor: pointer;
          float: right;
          padding: 5px;
          padding-top: 0;
        }
        ${smallDesktop.max(
          css`
            display: none;
            .close {
              display: block;
            }
            &.open {
              display: block;
              position: absolute;
              background: white;
              top: 67px;
              right: 5px;
              margin: 0;
              padding: 1.5em;
              box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
              max-height: 100px;
              overflow-y: auto;
              .awards {
                margin: 0;
              }
            }
          `
        )}
        .awards {
          margin-left: 1em;
          p {
            margin: 0;
            word-break: keep-all;
          }
        }
      }
    }
  }
`;
const Spark = makeEmojiResponsive("✨", "spark");
const HOF = makeEmojiResponsive("👑", "Hall of Fame");
interface FullSizePlayerProps {
  player: IPeople;
}
function FullSizePlayer({ player }: FullSizePlayerProps) {
  const [openAwards, setOpenAwards] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const position = useMemo(
    () => translatePosition(player.primaryPosition.abbreviation),
    [player.primaryPosition.abbreviation]
  );
  const heightAndWeight = useMemo(
    () => getHeightAndWeightToSI(player.height, player.weight),
    [player.height, player.weight]
  );
  const isHof = useMemo(() => isHOF(player.awards), [player.awards]);
  const awards = useMemo(() => countAwards(player.awards), [player.awards]);

  function openAwardsEvent(e: React.MouseEvent) {
    const minSize = 300;
    setCoords([
      window.innerWidth - minSize < e.pageX
        ? window.innerWidth - minSize
        : e.pageX,
      e.pageY
    ]);
    setOpenAwards(true);
  }
  const closeAwardsEvent = useCallback(() => {
    if (!openAwards) return;
    setOpenAwards(false);
  }, [openAwards]);

  useEffect(() => {
    window.addEventListener("click", closeAwardsEvent);

    return () => window.removeEventListener("click", closeAwardsEvent);
  }, [closeAwardsEvent]);
  return (
    <Player playerId={player.id}>
      <div className="top">
        <div className="profile" />
        <div className="info">
          <div className="row">
            <div className="personality">
              {isHof && (
                <p className="hof">
                  <HOF />
                  명예의 전당 ({isHof.season})
                </p>
              )}
              <h3 className="team">{player.currentTeam.name}</h3>
              <h1 className="name">{player.fullName}</h1>
              <p className="sub">
                {position}, {heightAndWeight}{" "}
              </p>
            </div>
            <div className="awards-button">
              <Button onClick={openAwardsEvent}>
                <Spark />
                Awards
              </Button>
            </div>
            <div
              className={["awardsWrap", openAwards && "open"]
                .filter(Boolean)
                .join(" ")}
              style={{
                top: coords[1] + "px",
                left: coords[0] + "px"
              }}
            >
              <div className="close" onClick={closeAwardsEvent} role="button">
                &times;
              </div>
              <Awards awards={awards} />
            </div>
          </div>
        </div>
      </div>
    </Player>
  );
}

export default FullSizePlayer;
