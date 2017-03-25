var assert = require('assert');
var RecordStore = require('../recordStore');

var recordStore;
var record1;
var record2;
var record3;
var record4;


describe("Record Store", function(){

  beforeEach(function(){

    recordStore = new RecordStore("Big Al's Record Store", "Glasgow");

    record1 = ("Led Zeppelin", "Led Zeppelin", 20);
    record2 = ("Led Zeppelin", "Led Zeppelin II", 20);
    record3 = ("Led Zeppelin", "Led Zeppelin III", 20);
    record4 = ("Led Zeppelin", "Led Zeppelin IV", 20);
    
  });

  it("should have a name", function(){
    assert.equal("Big Al's Record Store", recordStore.name);
  });

  it("should have a city", function(){
    assert.equal("Glasgow", recordStore.city);
  });

  it("should start with no inventory", function(){
    assert.equal(0, recordStore.inventory.length);
  });

  it("should be able to add to inventory", function(){
    recordStore.addRecord(record4);
    assert.equal(1, recordStore.inventory.length);
  });
});