const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        /* Making sure that the userName is a string. */
        type: String,
        /* Making sure that the userName is required. */
        required: true,
        /* Trimming the userName. clean up the gaps*/
        trim: true,
        /* Making sure that the userName is unique. */
        unique: true
    }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);

