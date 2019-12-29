export interface IPeople {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  height: string;
  weight: number;
  currentTeam: ITeam;
  primaryPosition: IPosition;
  awards: IAward[];
  stats: IStats[];
}
interface ITeam {
  id: number;
  name: string;
  teamCode: string;
  fileCode: string;
  abbreviation: string;
}
interface IPosition {
  code: string;
  name: string;
  type: string;
  abbreviation: string;
}
export interface IAward {
  id: string;
  name: string;
  date: string;
  season: string;
  team: ITeam;
}
export interface IStats {
  type: {
    displayName: string;
  };
  group: {
    displayName: string;
  };
  exemptions: any[];
  splits: ISeasonStats[];
}
export interface ISeasonStats {
  season: string;
  stat: any;
  team: ITeam;
}
