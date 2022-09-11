export type PropColorTheme = {
  colorTheme: string
}
export interface UserEmail {
  email: string;
}

export interface Likes {
  id: string;
  name: string;
  icon: string;
  user: any;
  heart?: any
}

export interface Sport {
  idSport: string;
  strSport: string;
  strFormat: string;
  strSportThumb: string;
  strSportIconGreen: string;
  strSportDescription: string;
}