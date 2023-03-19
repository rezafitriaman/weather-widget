export interface GeoCoding {
    name:        string;
    local_names: LocalNames;
    lat:         number;
    lon:         number;
    country:     string;
    state:       string;
}

export interface LocalNames {
    hu: string;
    la: string;
    eo: string;
    nl: string;
    en: string;
    de: string;
    ja: string;
    uk: string;
    zh: string;
    it: string;
    ar: string;
    ru: string;
    fy: string;
    lv: string;
    es: string;
    pt: string;
    sr: string;
    fr: string;
}
