export interface WeatherData {
    lat:             number;
    lon:             number;
    timezone:        string;
    timezone_offset: number;
    current:         Current;
    minutely:        Minutely[];
    hourly:          Current[];
    daily:           Daily[];
}

export interface Current {
    dt:         number;
    sunrise:   number;
    sunset:    number;
    temp:       number;
    feels_like: number;
    pressure:   number;
    humidity:   number;
    dew_point:  number;
    uvi:        number;
    clouds:     number;
    visibility: number;
    wind_speed: number;
    wind_deg:   number;
    weather:    Weather[];
    wind_gust?: number;
    pop?:       number;
    rain?:      Rain[];
    snow?:      Snow[];
}

export interface Daily {
    dt:         number;
    sunrise:    number;
    sunset:     number;
    moonrise:   number;
    moonset:    number;
    moon_phase: number;
    temp:       Temp;
    feels_like: FeelsLike;
    pressure:   number;
    humidity:   number;
    dew_point:  number;
    wind_speed: number;
    wind_deg:   number;
    weather:    Weather[];
    clouds:     number;
    wind_gust?: number;
    pop:        number;
    uvi:        number;
    rain?:      Rain[];
    snow?:      Snow[];
}

export interface Snow {
    "1h": number;
}


export interface Rain {
    "1h": number;
}

export interface Weather {
    id:          number;
    main:        Main;
    description: Description;
    icon:        Icon;
}

export enum Description {
    BrokenClouds = "broken clouds",
    FewClouds = "few clouds",
    LightRain = "light rain",
    ModerateRain = "moderate rain",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum Icon {
    The01D = "01d",
    The02D = "02d",
    The03D = "03d",
    The04D = "04d",
    The09D = "09d",
    The10D = "10d",
    The11D = "11d",
    The13D = "13d",
    The50D = "50d",
    The01N = "01n",
    The02N = "02n",
    The03N = "03n",
    The04N = "04n",
    The09N = "09n",
    The10N = "10n",
    The11N = "11n",
    The13N = "13n",
    The50N = "50n",
    Thesunrise = "sunrise",
    Thesunset = "sunset",
    Thecloudiness = "cloudiness",
    Thewind_gust = "wind gust",
    Thehumidity = "humidity",
    Thepressure = "pressure",
    Thevisibility = "visibility",
    TheUV_index = "UV index",
    Thewind_direction = "wind direction",
    Therain = "rain",
    Thesnow = "snow",
    Thewind_speed = "wind speed"
}

export enum Main {
    Clouds = "Clouds",
    Rain = "Rain",
}

export interface FeelsLike {
    day:   number;
    night: number;
    eve:   number;
    morn:  number;
}

export interface Temp {
    day:   number;
    min:   number;
    max:   number;
    night: number;
    eve:   number;
    morn:  number;
}

export interface Minutely {
    dt:            number;
    precipitation: number;
}

export interface Icon_map {
    '01d': string;
    '02d': string;
    '03d': string;
    '04d': string;
    '09d': string;
    '10d': string;
    '11d': string;
    '13d': string;
    '50d': string;
    '01n': string;
    '02n': string;
    '03n': string;
    '04n': string;
    '09n': string;
    '10n': string;
    '11n': string;
    '13n': string;
    '50n': string;
    'sunrise': string;
    'sunset': string;
    'cloudiness': string;
    'wind gust': string;
    'humidity': string;
    'pressure': string;
    'visibility': string;
    'UV index': string;
    'wind direction': string;
    'rain': string;
    'snow': string;
    'wind speed': string;
}