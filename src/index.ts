import { BASE32, BITS } from "./constants";

export function convertToGeohash(latitude: number, longitude: number): string {
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
