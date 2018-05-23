const express = require('express');
const router = express.Router();
const multer  = require('multer');
const PhotosController = require('../controllers/photos.controller');
const upload = multer({ dest: 'app.public/assets/user' });

router.post('/photos/add', upload.single('image'), PhotosController.add);

router.post('/photos/delete/:clientId', PhotosController.delete);

router.get('/photos/list', PhotosController.list);

module.exports = router;
