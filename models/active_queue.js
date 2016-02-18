var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var activeQueueSchema = mongoose.Schema({
    provider: {
        type: Schema.ObjectId,
        ref: "providers"
    },
    name: {
        first: String,
        last: String
    },
    title: String,
    email: String,
    password: String,
    phone: {
        type: {
            type: String
        },
        number: String
    },
    status: String,
    timeStamp: {
        created: {
            type: Date,
            default: Date.now
        },
        updated: {
            type: Date,
            default: Date.now
        }
    }
});

activeQueueSchema.pre('save', function(next) {
    this.timeStamp.updated = new Date();
    next();
});


module.exports = mongoose.model('employees', activeQueueSchema);