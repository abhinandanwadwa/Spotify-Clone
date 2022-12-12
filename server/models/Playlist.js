const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PlaylistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        default: []
    },
    authorId: {
        type: String,
        required: true
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
}, {timestamps: true});

module.exports = mongoose.model('playlist', PlaylistSchema);