const mongoose = require('mongoose');


//schema or modal for course
const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Course', courseSchema);