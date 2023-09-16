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
const geohash = geocoordinateToGeohash(latitude, longitude);

console.log(geohash);
```
