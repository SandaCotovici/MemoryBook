const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');

const HASH_SIZE = 20;
const ROOT_STORAGE_DESTINATION = 'app.storage';


class StorageProvider {

  constructor() {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, ROOT_STORAGE_DESTINATION)
      },
      filename: (req, file, cb) => {
        cb(null, this.generateHash());
      }
    });
    this.upload = multer({storage: storage});
  }

  generateHash() {
    return crypto.randomBytes(HASH_SIZE).toString('hex');
  }

  uploadSingle(type) {
    return this.upload.single('image');
  }

  uploadMultiple(type) {

  }

}


module.exports = new StorageProvider();
