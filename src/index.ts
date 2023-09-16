import { BASE32, BITS } from "./constants";

type GeohashToGeocoordinateOptions = {
  latitude: number;
  longitude: number;
  precision?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // check, https://docs.quadrant.io/quadrant-geohash-algorithm
};

export function geocoordinateToGeohash({
  latitude,
  longitude,
  precision = 6,
}: GeohashToGeocoordinateOptions): string {
  let isEven = true;
  let latMin = -90,
    latMax = 90;
  let lonMin = -180,
    lonMax = 180;
  let bit = 0;
  let ch = 0;
  let geohash = "";

  while (geohash.length < precision) {
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
