var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var visitorsSchema = mongoose.Schema({
    provider: {
        type: Schema.ObjectId,
        ref: "providers"
    },
    name: {
        first: String,
        last: String
    },
    email: String,
    phone: {
        type: String,
        number: String
    },
    timeStamp: {
        created: {
            type: Date,
            default: Date.now
        },
        updated: {
            type: Date,
            default: Date.now
        }
    },
    status: String
}, {
    id: true,
    collection: "visitors"
});

visitorsSchema.pre('save', function(next) {
    this.timeStamp.updated = new Date();
    next();
});



module.exports = mongoose.model('visitors', visitorsSchema);