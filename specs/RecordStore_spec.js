var assert = require('assert');
var RecordStore = require('../recordStore');

var recordStore;

describe("Record Store", function(){

  beforeEach(function(){
    recordStore = new RecordStore("Big Al's Record Store", "Glasgow");
    
  });

  it("should have a name", function(){
    assert.equal("Big Al's Record Store", recordStore.name)
  });

  it("should have a city", function(){
    assert.equal("Glasgow", recordStore.city)
  });

  it("should start with no inventory", function(){
    assert.equal(0, recordStore.inventory.length)
  });
});