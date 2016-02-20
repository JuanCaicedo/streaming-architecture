var highland = require('highland');

function getDataStream(){
  return highland([{
    a: 1
  }, {
    b: 2
  }, {
    c: 3
  }]);
}

module.exports = {
  getDataStream: getDataStream
};
