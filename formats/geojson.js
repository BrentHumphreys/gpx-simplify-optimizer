/**
 * Class GeoJSONFormat
 *
 * @require JSON native object (ok in modern browsers)
 * @inherit Format
 */
function GeoJSONFormat() {
    this.param = {
        'key': 'geojson',
        'syntax': 'json',
        'name': 'GeoJSON',
        'extension': 'geojson',
        'contenttype': 'appplication/json'
    }
    this.exportData = function(data) {
        return JSON.stringify(data);
    }
    this.display = function(data) {
        return prettyData.json(data);
    }
}
GeoJSONFormat.prototype = new Format();

