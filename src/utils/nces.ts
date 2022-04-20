export interface NCESSchoolFeatureAttributes {
    NCESSCH?: string,
    LEAID?: string,
    NAME?: string,
    OPSTFIPS?: string,
    STREET?: string,
    CITY?: string,
    STATE?: string,
    ZIP?: string,
    STFIP?: string,
    CNTY?: string,
    NMCNTY?: string,
    LOCALE?: string,
    LAT?: number,
    LON?: number
}

interface NCESSchoolFeature {
    "attributes"?: NCESSchoolFeatureAttributes,
    "geometry"?: {
        "x": number,
        "y": number
    }
}

export interface NCESDistrictFeatureAttributes {
    OBJECTID: number,
    LEAID: string,
    NAME: string,
    OPSTFIPS: string,
    LSTREE: string,
    LCITY: string,
    LSTATE: string,
    LZIP: string,
    LZIP4: string,
    STFIP15: string,
    CNTY15: string,
    NMCNTY15: string,
    LAT1516: number,
    LON1516: number,
    CBSA15: string,
    NMCBSA15: string,
    CBSATYPE15: string,
    CSA15: string,
    NMCSA15: string,
    NECTA15: string,
    NMNECTA15: string,
    CD15: string,
    SLDL15: string,
    SLDU15: string,
}

interface NCESDistrictFeature {
    "attributes"?: NCESDistrictFeatureAttributes,
    "geometry"?: {
        "x": number,
        "y": number
    }
}

const searchSchoolDistricts = async (name:string):Promise<NCESDistrictFeatureAttributes[]> => {
    let publicSchoolEndpoint = `https://nces.ed.gov/opengis/rest/services/K12_School_Locations/EDGE_GEOCODE_PUBLICLEA_1516/MapServer/0/query?where=UPPER(NAME) LIKE UPPER('%${name}%')&outFields=*&outSR=4326&f=json`;
    let combinedData = [];
    let publicResponse = await (await fetch(publicSchoolEndpoint)).json();
    
    combinedData = [
        ...publicResponse.features ? publicResponse.features.map((feature:NCESDistrictFeature) => {return feature.attributes }) : [],
    ]
    return combinedData;
}

const searchSchools = async (name:string, district?:string):Promise<NCESSchoolFeatureAttributes[]> => {
    let privateSchoolEndpoint = `https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Private_School_Locations_Current/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${name}%')${district ? `%20AND%20LEAID%20%3D%20'${district}'` : ""}&outFields=*&outSR=4326&f=json`;
    let publicSchoolEndpoint = `https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Public_School_Location_201819/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${name}%')${district ? `%20AND%20LEAID%20%3D%20'${district}'` : ""}&outFields=*&outSR=4326&f=json`;
    let combinedData = [];
    let privateResponse = await (await fetch(privateSchoolEndpoint)).json();
    let publicResponse = await (await fetch(publicSchoolEndpoint)).json();
    
    combinedData = [
        ...privateResponse.features ? privateResponse.features.map((feature:NCESSchoolFeature) => {return feature.attributes }) : [],
        ...publicResponse.features ? publicResponse.features.map((feature:NCESSchoolFeature) => {return feature.attributes }) : [],
    ]
    return combinedData;
}

export {searchSchoolDistricts, searchSchools}