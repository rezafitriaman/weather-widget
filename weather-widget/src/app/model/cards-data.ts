import { Icon, Rain, Snow, Weather } from "./weather-data";

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
    values: ValueData[];
}

export interface DateElement {
    value: number;
    name:  string;
}

export interface ValueData {
    value: Snow | Rain | number | Icon;
    u?:    string;
    name:  string;
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