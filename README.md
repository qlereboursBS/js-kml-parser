Client side helper to read .kml files content and parse their content as GeoJSON.

## Install
`npm install js-kml-parser` or `yarn add js-kml-parser`

## How to use
```javascript
import kmlParser from 'js-kml-parser';

const file = document.getElementById("kml-file").files[0];
const reader = new FileReader();
reader.onload = () => {
  const geoJson = kmlParser.toGeoJson(reader.result);
  console.log(geoJson);
}
```