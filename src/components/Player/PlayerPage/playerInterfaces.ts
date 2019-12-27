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
