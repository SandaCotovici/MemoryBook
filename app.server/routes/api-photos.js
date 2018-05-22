const express = require('express');
const router = express.Router();

const StorageProvider = require('../providers/storage.provider');
const PhotosController = require('../controllers/photos.controller');

router.post('/photos/add', StorageProvider.uploadSingle('image'), PhotosController.add);

router.post('/photos/delete/:clientId', PhotosController.delete);

router.get('/photos/list', PhotosController.list);

module.exports = router;
