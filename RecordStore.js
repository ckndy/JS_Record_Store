var RecordStore = function(name, city, inventory, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(){
    this.inventory.push(record);
  },

  listInventory: function(){
    return this.inventory; // Just can't seem to get this one working
  },

  sellRecord: function(){
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 4);
    this.balance += record.price;
  },

  }

  module.exports = RecordStore;