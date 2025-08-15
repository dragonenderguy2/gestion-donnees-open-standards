const jsonToCsv = require('json-to-csv');
const xmlbuilder = require('xmlbuilder');

function convertToCSV(data) {
  return jsonToCsv(data);
}

function convertToXML(data) {
  return xmlbuilder.create('root')
    .ele(data)
    .end({ pretty: true });
}

module.exports = { convertToCSV, convertToXML };