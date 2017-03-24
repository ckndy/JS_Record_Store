var assert = require('assert');
var Record = require('../record');

var record1 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record2 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record3 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record4 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record5 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record6 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record7 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record8 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);
// var record9 = new Record("Led Zeppelin", "Led Zeppelin IV" 20);

describe("Record", function(){

  it("should have an artist", function(){
    assert.equal("Led Zeppelin", record1.artist);
  });

  it("should have a title", function(){
    assert.equal("Led Zeppelin IV", record.title);
  });

  it("should have a price", function(){
    assert.equal(20, record.price);
  });
});


