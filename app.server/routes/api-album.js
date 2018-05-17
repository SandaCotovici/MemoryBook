const express = require('express');
const router = express.Router();
const AlbumController = require('../controllers/album.controller');


router.get('/album/sizes', AlbumController.sizes);

router.get('/album/covers', AlbumController.covers);

router.get('/album/papers', AlbumController.papers);

module.exports = router;
