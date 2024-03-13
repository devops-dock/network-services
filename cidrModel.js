const mongoose = require('mongoose');

const cidrSchema = mongoose.mongoose.Schema({
    
});

const Cidr = mongoose.model('CidrNetwork', cidrSchema);

module.exports = Cidr;