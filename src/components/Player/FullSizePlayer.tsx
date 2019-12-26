import React, { useState } from "react";
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

interface PlayerProps {
  teamColor: string;
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

    ${smallTablet.max(css`
      flex-direction: column;
    `)}
    .profile {
      width: 270px;
      height: 270px;
      border-radius: 135px;
      background: url(https://image.chosun.com/sitedata/image/201903/20/2019032000679_0.jpg);
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
      margin-top: 2.5em;
      margin-left: 1.5em;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      flex: 1;
      position: relative;
      ${tablet.max(css`
        margin-top: 1em;
      `)}
      ${largeMobile.max(css`
        margin-left: 0;
      `)}

      .personality {
        .team {
          font-size: 1em;
          margin: 0;
          color: ${props => props.teamColor};
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
      .stats-wrap {
        overflow-x: auto;
        margin-top: 1em;

        .stats {
          width: 100% !important;
          td,
          th {
            padding: 0 0.85em;
            word-break: keep-all;
          }
          thead tr th {
            text-align: left;
          }
        }
      }
    }
  }
`;
const MVP = makeEmojiResponsive("🏆", "MVP");
const HankAron = makeEmojiResponsive("🎖", "Hank Aron");
const SliverSlugger = makeEmojiResponsive("🏅", "Silver Slugger");
const AllStar = makeEmojiResponsive("⭐", "All-star");
const Spark = makeEmojiResponsive("✨", "spark");
function FullSizePlayer() {
  const [openAwards, setOpenAwards] = useState(false);
  return (
    <Player teamColor="#BF111A">
      <div className="top">
        <div className="profile" />
        <div className="info">
          <div className="row">
            <div className="personality">
              <h3 className="team">Los Angeles Angels</h3>
              <h1 className="name">마이크 트라웃</h1>
              <p className="sub">AL MVP</p>
            </div>
            <div className="awards-button">
              <Button onClick={() => setOpenAwards(v => !v)}>
                <Spark />
                Awards
              </Button>
            </div>
            <div
              className={["awardsWrap", openAwards && "open"]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className="close"
                onClick={() => setOpenAwards(false)}
                role="button"
              >
                &times;
              </div>
              <div className="awards">
                <p>
                  MVP
                  <MVP />
                  <MVP />
                  <MVP />
                </p>
                <p>
                  Rookie of Year <span className="sub">(2012)</span>
                </p>
                <p>
                  Hank Aron Awards
                  <HankAron />
                  <HankAron />
                </p>
                <p>
                  Sliver Slugger
                  <SliverSlugger />
                  <SliverSlugger />
                  <SliverSlugger />
                  <SliverSlugger />
                  <SliverSlugger />
                  <SliverSlugger />
                  <SliverSlugger />
                </p>
              </div>
              <div className="awards">
                All-Star
                <AllStar />
                <AllStar />
                <AllStar />
                <AllStar />
                <AllStar />
                <AllStar />
                <AllStar />
                <AllStar />
              </div>
            </div>
          </div>
          <div className="stats-wrap">
            <table className="stats">
              <thead>
                <tr>
                  <th>타수</th>
                  <th>안타</th>
                  <th>타점</th>
                  <th>득점</th>
                  <th>도루</th>
                  <th>홈런</th>
                  <th>타율</th>
                  <th>출루율</th>
                  <th>장타율</th>
                  <th>OPS</th>
                  <th>fWAR</th>
                  <th>bWAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>470</td>
                  <td>137</td>
                  <td>104</td>
                  <td>110</td>
                  <td>11</td>
                  <td>45</td>
                  <td>.291</td>
                  <td>.438</td>
                  <td>.635</td>
                  <td>1.083</td>
                  <td>8.6</td>
                  <td>8.3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Player>
  );
}

export default FullSizePlayer;
