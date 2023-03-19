import { Description, Icon, Main, Rain, Snow, Weather } from "./weather-data";

export interface PrimaryCardData {
    name:        string;
    timezone:    string;
    temp:        number;
    feels_like:  number;
    description: Weather[];
    icon:        Weather[];
    dt:          number;
}

export interface SecondaryCardData {
    date?:   DateElement[];
    values?: Array<any[] | number>;

    // sunrice?:    number;
    // sunset?:     number;
    // clouds?:     number;
    // wind_gust?:  number;
    // humidity?:   number;
    // pressure?:   number;
    // visibility?: number;
    // uvi?:        number;
    // wind_deg?:   number;
    // wind_speed?: number;
    // rain?:       Rain[];
    // snow?:       Snow[];
}

export interface DateElement {
    d: number;
    n: string;
}

export interface HourlyCardData {
    dt:          number;
    icon:        Weather[];
    description: Weather[];
}

export interface DailyCardData {
    dt:         number;
    icon:       Weather[];
    day:        number;
    night:      number;
    wind_speed: number;
}