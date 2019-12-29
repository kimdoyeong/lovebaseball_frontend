import React, { useMemo } from "react";
import { IPeople, ISeasonStats } from "./playerInterfaces";
import { yearByYear, getCareer } from "./utils";
import styled from "styled-components";
import teamColors from "../../../lib/teamColors";

const StatTable = styled.div`
  overflow-x: auto;
  * {
    outline: 0;
    margin: 0;
    border: 0;
  }
  table {
    min-width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    white-space: nowrap;
    word-break: keep-all;
    padding: 0.25em 0.7em;
  }

  tr.multipleTeams {
    background: #dadada;
  }
  .season {
    background: #dadada;
  }
  tfoot {
    border-top: 3px solid #eaeaea;
    background: #eaeaea;
  }
`;
function Stats({ player }: { player: IPeople }) {
  const stats = useMemo(() => yearByYear(player.stats), [player.stats]);
  const career = useMemo(() => getCareer(player.stats), [player.stats]);

  if (!stats || !career) return null;
  const playerType: "hitting" | "pitching" = stats.group.displayName as any;
  const statNames =
    playerType === "hitting"
      ? [
          "경기",
          "타석",
          "타수",
          "안타",
          "2루타",
          "3루타",
          "홈런",
          "볼넷",
          "도루",
          "도루자",
          "타점",
          "타율",
          "출루율",
          "장타율",
          "OPS"
        ]
      : [
          "경기",
          "선발",
          "삼진",
          "볼넷",
          "실점",
          "이닝",
          "평균자책점",
          "승리",
          "패배",
          "세이브",
          "홀드",
          "완투",
          "완봉",
          "WHIP",
          "피홈런",
          "피안타율",
          "피장타율"
        ];
  const statsValue = ({ stat }: ISeasonStats) => {
    if (playerType === "hitting")
      return [
        stat.gamesPlayed,
        stat.plateAppearances,
        stat.atBats,
        stat.hits,
        stat.doubles,
        stat.triples,
        stat.homeRuns,
        stat.baseOnBalls,
        stat.stolenBases,
        stat.caughtStealing,
        stat.rbi,
        stat.avg,
        stat.obp,
        stat.slg,
        stat.ops
      ];
    return [
      stat.gamesPitched,
      stat.gamesStarted,
      stat.strikeOuts,
      stat.baseOnBalls,
      stat.runs,
      stat.inningsPitched,
      stat.era,
      stat.wins,
      stat.losses,
      stat.saves,
      stat.holds,
      stat.completeGames,
      stat.shutouts,
      stat.whip,
      stat.homeRuns,
      stat.avg,
      stat.slg
    ];
  };
  return (
    <StatTable>
      <table>
        <thead>
          <tr>
            <th className="season">시즌</th>
            <th>팀</th>
            {statNames.map((name, i) => (
              <th key={i}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stats.splits.map((data, i) => (
            <tr
              key={i}
              className={
                i - 1 !== -1 && stats.splits[i - 1].season === data.season
                  ? "multipleTeams"
                  : ""
              }
            >
              <td className="season">{data.season}</td>
              <td
                style={{
                  background:
                    data.team &&
                    data.team.abbreviation &&
                    (teamColors as any)[data.team.abbreviation]
                      ? (teamColors as any)[data.team.abbreviation].color
                      : undefined,
                  color:
                    data.team &&
                    data.team.abbreviation &&
                    (teamColors as any)[data.team.abbreviation]
                      ? (teamColors as any)[data.team.abbreviation].white
                        ? "white"
                        : "black"
                      : undefined
                }}
              >
                {data.team ? data.team.abbreviation : "전체"}
              </td>
              {statsValue(data).map((d, i) => (
                <td key={i}>{d}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>통산</td>
            <td></td>
            {statsValue(career).map((d, i) => (
              <td key={i}>{d}</td>
            ))}
          </tr>
        </tfoot>
      </table>
    </StatTable>
  );
}
export default Stats;
