const GenericResponse = require('../common/models/generic-response.model');
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');

/*
* Move this to configuration files
* */
const url = 'mongodb://localhost:27017';
const dbName = 'membookdb';


class PhotosController {

  add(req, res) {

    // Connect using MongoClient
    MongoClient.connect(url, function (err, client) {

      // Create a collection we want to drop later
      const clientsCollection = client.db(dbName).collection('clients');
      const photosCollection = client.db(dbName).collection('photos');

      // TODO Search by authenticated clientId
      clientsCollection.find({"name": "Red Jon"}).toArray().then(items => {
        test.equal(null, err);

        const dbResult = items[0];
        photosCollection.insert({clientId: dbResult._id, tag: 'AAA', path: req.file.filename}).then((err, result) => {

          const response = new GenericResponse({
            status: 'SUCCESS',
            data: {
              photoUrl: req.file.filename,
            }
          });

          client.close();
          res.send(response);

        });

      });
    });
  }

  delete() {

  }

  list() {

  }

}

module.exports = new PhotosController();
