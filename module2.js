var oboe = require('oboe');
var module1 = require('./module1.js');

oboe(module1.getDataStream())
  // .node('!', function(data){
  //   console.log(data);
  // });
  .done(function(data){
    console.log(data);
  });
