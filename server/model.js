var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NetworkType = new Schema({
  networkName: {
    type: String
  },
  encryptionType: {
    type: String
  }
});

var Networks = mongoose.model("Networks", NetworkType);
module.exports = Networks;
