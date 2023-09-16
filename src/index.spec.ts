import { geocoordinateToGeohash } from "./";

it("geocoordinateToGeohash", () => {
  const latitude = 37.56616;
  const longitude = 126.978356;
  const geohash = geocoordinateToGeohash(latitude, longitude);

  expect(geohash).toBe("wydm9qwydpu9");
});
