const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    classTeacher: {
        type: String
    },

    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]

}, {
    timestamps: true
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;