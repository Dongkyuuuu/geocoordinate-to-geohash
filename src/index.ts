import { BASE32, BITS } from "./constants";

export function geocoordinateToGeohash(
  latitude: number,
  longitude: number
): string {
  let isEven = true;
  let latMin = -90,
    latMax = 90;
  let lonMin = -180,
    lonMax = 180;
  let bit = 0;
  let ch = 0;
  let geohash = "";

  while (geohash.length < 12) {
    if (isEven) {
      const lonMid = (lonMin + lonMax) / 2;
      if (longitude > lonMid) {
        ch |= BITS[bit];
        lonMin = lonMid;
      } else {
        lonMax = lonMid;
      }
    } else {
      const latMid = (latMin + latMax) / 2;
      if (latitude > latMid) {
        ch |= BITS[bit];
        latMin = latMid;
      } else {
        latMax = latMid;
      }
    }

    isEven = !isEven;
    if (bit < 4) {
      bit++;
    } else {
      geohash += BASE32[ch];
      bit = 0;
      ch = 0;
    }
  }

  return geohash;
}

export function geohashToGeocoordinate(geohash: string): [number, number] {
  let isEven = true;
  let latMin = -90,
    latMax = 90;
  let lonMin = -180,
    lonMax = 180;
  let lat = 0,
    lon = 0;

  for (let i = 0; i < geohash.length; i++) {
    const ch = BASE32.indexOf(geohash[i]);
    for (let j = 0; j < 5; j++) {
      const mask = BITS[j];
      if (isEven) {
        if ((ch & mask) !== 0) {
          lonMin = (lonMin + lonMax) / 2;
        } else {
          lonMax = (lonMin + lonMax) / 2;
        }
      } else {
        if ((ch & mask) !== 0) {
          latMin = (latMin + latMax) / 2;
        } else {
          latMax = (latMin + latMax) / 2;
        }
      }
      isEven = !isEven;
    }
  }

  lat = (latMin + latMax) / 2;
  lon = (lonMin + lonMax) / 2;

  return [lat, lon];
}
