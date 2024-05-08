export enum SiteMode {
  LIGHT,
  BALANCED,
  DARK,
}

export interface WeatherSiteMode {
  mode: SiteMode;
}

export declare type SiteModeKey = keyof typeof SiteMode;
