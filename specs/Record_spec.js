var assert = require('assert');
var Record = require('../record');

var record = new Record("Led Zeppelin", "Led Zeppelin", 20);
var record = new Record("Led Zeppelin", "Led Zeppelin II", 20);
var record = new Record("Led Zeppelin", "Led Zeppelin III", 20);
var record = new Record("Led Zeppelin", "Led Zeppelin IV", 20);

describe("Record", function(){
  it("should have an artist", function(){
    assert.equal("Led Zeppelin", record.artist);
  });

  it("should have a title", function(){
    assert.equal("Led Zeppelin IV", record.title);
  });

  it("should have a price", function(){
    assert.equal(20, record.price);
  });
});


