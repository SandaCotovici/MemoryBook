const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require('path');

const PhotosController = require('../controllers/photos.controller');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    /*TODO Move this path ref to a global settings in some root directory*/
    cb(null, path.join(__dirname, '..', '..', 'app.public', 'assets', 'user').toString())
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});



const upload = multer({ storage: storage});

router.post('/photos/add', upload.single('image'), PhotosController.add);

router.post('/photos/delete/:clientId', PhotosController.delete);

router.get('/photos/list', PhotosController.list);

module.exports = router;


