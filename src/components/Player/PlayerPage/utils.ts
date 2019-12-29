import { IAward } from "./playerInterfaces";

export function translatePosition(position: string): string {
  switch (position) {
    case "C":
      return "포수";
    case "1B":
      return "1루수";
    case "2B":
      return "2루수";
    case "3B":
      return "3루수";
    case "SS":
      return "유격수";
    case "RF":
      return "우익수";
    case "CF":
      return "중견수";
    case "LF":
      return "좌익수";
    case "OF":
      return "외야수";
    case "P":
      return "투수";
    case "SP":
      return "선발투수";
    case "RP":
      return "중간계투";
    case "CP":
      return "마무리 투수";
  }
  return "없음";
}

export function getHeightAndWeightToSI(height: string, weight: number) {
  const heightFormat = height.replace(/'|"/g, "");
  const [fit, inch] = heightFormat.split(" ").map(data => parseInt(data, 10));
  const cm = fit * 30.48 + inch * 2.54;
  const kg = weight / 2.205;

  return `${cm.toFixed(0)}cm ${kg.toFixed(0)}kg`;
}

export function isHOF(awards: IAward[] | null) {
  if (!awards) return false;
  for (const award of awards) {
    if (award.id !== "MLBHOF") continue;
    return award;
  }
  return false;
}
export interface IAwardListObject {
  league?: string;
  season: string;
}
export function countAwards(awards: IAward[] | null) {
  if (!awards) return null;

  const data = {
    mvp: [] as IAwardListObject[],
    rookie: false as false | string,
    HankAaron: [] as IAwardListObject[],
    SilverSlugger: [] as IAwardListObject[],
    AllStar: [] as IAwardListObject[],
    GoldGlove: [] as IAwardListObject[]
  };
  for (const award of awards) {
    const league = award.id.slice(0, 2);
    const awardId = award.id.slice(2);
    const { season } = award;
    const pData = {
      league,
      season
    };

    if (league !== "AL" && league !== "NL") continue;
    if (awardId === "MVP") {
      data.mvp.push(pData);
      continue;
    }
    if (awardId === "ROY") {
      data.rookie = award.season;
      continue;
    }
    if (awardId === "HAA") {
      data.HankAaron.push(pData);
      continue;
    }
    if (awardId === "SS") {
      data.SilverSlugger.push(pData);
      continue;
    }
    if (awardId === "GG") {
      data.GoldGlove.push(pData);
      continue;
    }
    if (awardId === "AS") {
      data.AllStar.push(pData);
      continue;
    }
  }

  return data;
}
