const DomParser = require('xmldom').DOMParser;
const mapboxToGeoJson = require('@mapbox/togeojson');

const toGeoJson = (kmlContent) => {
  const xmlDoc = new DomParser().parseFromString(kmlContent);
  const geoJson = mapboxToGeoJson.kml(xmlDoc);
  return geoJson;
};

module.exports = {
  toGeoJson,
}