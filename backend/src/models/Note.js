const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    /* Adding a createdAt and updatedAt field to the document. this property is from mongobd */
    timestamps: true
});


module.exports = model('Note', noteSchema);