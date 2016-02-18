var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



//Schema to retrieve valid patients for active queue
var patient   = new Schema({
    _admin_id: {
        type: Schema.Types.ObjectId,
        ref: 'Admin', required: true },//Company/Hospital ID

    name: String,

    _doctor_id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee', required: false },//Doctor to see, not required?

    checkin_time: { type : Date, default: Date.now },
});


/**
 * Unique _providerId
 * visitorIds
 */
var active_queueSchema = mongoose.Schema({
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
}, {
    id: true,
    collection: "employees"
});

active_queueSchema.pre('save', function(next) {
    this.timeStamp.updated = new Date();
    next();
});



module.exports = mongoose.model('active_queue', active_queueSchema);