# geocoordinate-to-geohash

Converts a geocoordinate to a geohash

Support `TypeScript`!

## Usage

```sh
$ yarn add geocoordinate-to-geohash
```

```typescript
import { geocoordinateToGeohash } from "geocoordinate-to-geohash";
const latitude = 37.56616;
const longitude = 126.978356;
const geohash = geocoordinateToGeohash({
  latitude,
  longitude,
  precision, // default is 6
});

console.log(geohash);
```

### Precision

the maximum level of geohash precision is 12 and it represents a tile of 3.7 cm \* 1.9 cm. So, finding a location can be very efficient with Geohash.

More detail, check this [geohash-algorithm](https://docs.quadrant.io/quadrant-geohash-algorithm)
