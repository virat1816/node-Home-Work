const { string } = require("joi");
const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
    music_title: {
        type: String,
        trim: true
    },
    artist: {
        type: String,
        trim: true
    },
    album: {
        type: String,
        trim: true
    },
    genre: {
        type: String,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Music = mongoose.model("Music", MusicSchema);
module.exports = Music;