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

  it("should have a balance", function(){
    assert.equal(0, recordStore.balance);
  });

  it("should be able to add to inventory", function(){
    recordStore.addRecord(record4);
    assert.equal(1, recordStore.inventory.length);
  });

  it("should be able to add to inventory", function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    assert.equal(4, recordStore.inventory.length);
  });

  it("should be able to list inventory", function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    assert.equal("Artist: Led Zeppelin, Title: Led Zeppelin, Price: 20", recordStore.listInventory());
    assert.equal("Artist: Led Zeppelin, Title: Led Zeppelin II, Price: 20", recordStore.listInventory());
    assert.equal("Artist: Led Zeppelin, Title: Led Zeppelin III, Price: 20", recordStore.listInventory());
    assert.equal("Artist: Led Zeppelin, Title: Led Zeppelin IV, Price: 20", recordStore.listInventory());
  });

  it("should be able to sell records", function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    recordStore.sellRecord(record1);
    recordStore.sellRecord(record2);
    recordStore.sellRecord(record3);
    recordStore.sellRecord(record4);
    assert.equal(80, recordStore.balance);

  });
  
});