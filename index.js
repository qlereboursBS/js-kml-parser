const mapboxToGeoJson = require('@mapbox/togeojson');

const toGeoJson = (kmlContent) => {
  const xmlDoc = new DOMParser().parseFromString(kmlContent, 'application/xml');
  return mapboxToGeoJson.kml(xmlDoc);
};

module.exports = {
  toGeoJson,
}