const AlbumApi = require('./api-album');
const PhotosApi = require('./api-photos');


/*Api map*/
const API = {
  ALBUM: AlbumApi,
  PHOTOS: PhotosApi
};

module.exports = API;
