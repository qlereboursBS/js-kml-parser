const assert = require('assert');
const fs = require('fs');
const kmlParser = require('../index');
const expect = require('expect.js');
require('jsdom-global')();
global.DOMParser = window.DOMParser

describe('reads kml content', () => {
  const fileContent = fs.readFileSync('./test/sample/kml_sample.kml', 'utf8');
  const geoJson = kmlParser.toGeoJson(fileContent);
  // console.log(geoJson);
  expect(geoJson).not.to.be(undefined);
  expect(geoJson).not.to.be(null);
  expect(geoJson.type).to.be('FeatureCollection');
  expect(geoJson.features).to.be.an('array');
  expect(geoJson.features.length).to.be(19);
})