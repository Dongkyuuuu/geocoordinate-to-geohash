import { geocoordinateToGeohash } from "./";

describe("geocoordinateToGeohash", () => {
  it("Run successfully geocoordinateToGeohash", () => {
    const latitude = 37.56616;
    const longitude = 126.978356;
    const geohash = geocoordinateToGeohash({
      latitude,
      longitude,
    });

    expect(geohash).toBe("wydm9q");
  });

  it("If precision is changed", () => {
    const latitude = 37.56616;
    const longitude = 126.978356;
    const geohash = geocoordinateToGeohash({
      latitude,
      longitude,
      precision: 12,
    });

    expect(geohash).toBe("wydm9qwydpu9");
  });
});
