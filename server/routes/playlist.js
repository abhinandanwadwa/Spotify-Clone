const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const UserSchema = require('../models/User');
const PlaylistSchema = require('../models/Playlist');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;






// Route 1: Create a new playlist: POST: http://localhost:8181/api/playlist/createplaylist. Login Required
router.post('/createplaylist', fetchuser, [
    body('name', "Playlist name cannot be empty").isLength({ min: 1 }),
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const doubleDouble = await PlaylistSchema.find({ name: req.body.name, authorId: req.user.id });

        let newPlaylist;
        if (doubleDouble.length === 0) {
            newPlaylist = await PlaylistSchema.create({
                name: req.body.name,
                authorId: req.user.id,
                image: { public_id: req.body.public_id, url: req.body.url }
            });
        }
        else {
            return res.status(400).json({ error: "This playlist already exist!" })
        }

        res.status(200).json(newPlaylist);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});











// Route 2: Add a song to the playlist: POST: http://localhost:8181/api/auth/register. Login Required
router.post('/addsong', fetchuser, [
    body('song', "Please provide a valid song").isLength({ min: 10 }),
    body('playlist', "Please provide a valid playlist").isLength({ min: 10 }),
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const thePlaylist = await PlaylistSchema.findById(req.body.playlist);
        if (!thePlaylist) {
            return res.status(400).json({ error: "Playlist not found!" });
        }
        let songsArray = thePlaylist.songs;
        songsArray.push(req.body.song);

        if (thePlaylist.authorId === req.user.id) {
            await PlaylistSchema.updateOne(req.body.playlist, { songs: songsArray });
            return res.status(200).json({ success: "This song has been successfully added to your playlist!" });
        }
        else {
            return res.status(400).json({ error: "Some error occurred!" });
        }



    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});











// Route 3: Get all of my playlists: POST: http://localhost:8181/api/playlist/getmyplaylists. Login Required
router.get('/getmyplaylists', fetchuser, async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const myPlaylists = await PlaylistSchema.find({ authorId: req.user.id });
        res.status(200).json(myPlaylists);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports = router;