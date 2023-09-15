var mongoose = require('mongoose');

const collectionName = 'fr_face';

// Setup schema
var inputSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

// Export Input model
var Input = module.exports = mongoose.model(collectionName, inputSchema);

module.exports.get = function (callback, limit) {
    Input.find(callback).limit(limit);
}
