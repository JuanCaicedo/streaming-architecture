var module1 = require('./module1.js');

module1.getDataStream()
  .on('data', function(data){
    console.log(data);
  });
