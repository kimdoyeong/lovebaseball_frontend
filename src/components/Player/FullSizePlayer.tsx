import React from "react";
import styled from "styled-components";
import makeEmojiResponsive from "../../lib/functions/makeEmojiResponsive";

interface PlayerProps {
  teamColor: string;
}
const Player = styled.div<PlayerProps>`
  .sub {
    color: #8e8e8e;
    margin: 0;
  }
  .row {
    display: flex;
  }
  .top {
    display: flex;
    .profile {
      width: 270px;
      height: 270px;
      border-radius: 135px;
      background: gray;
    }
    .info {
      margin-top: 2.5em;
      margin-left: 1.5em;

      .personality {
        .team {
          font-size: 1em;
          margin: 0;
          color: ${props => props.teamColor};
        }
        .name {
          margin: 0;
          font-size: 2em;
        }
      }
      .awardsWrap {
        margin-left: 3em;
        display: flex;
        .awards {
          margin-left: 1em;
          p {
            margin: 0;
          }
        }
      }
      .stats {
        td {
          padding: 0 0.85em;
        }
      }
    }
  }
`;
const MVP = makeEmojiResponsive("🏆", "MVP");
const HankAron = makeEmojiResponsive("🎖", "Hank Aron");
const SliverSlugger = makeEmojiResponsive("🏅", "Silver Slugger");
const AllStar = makeEmojiResponsive("⭐", "All-star");
function FullSizePlayer() {
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
            <div className="awardsWrap">
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
            </tbody>
          </table>
        </div>
      </div>
    </Player>
  );
}

export default FullSizePlayer;
