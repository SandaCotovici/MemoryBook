const configProvider = require('../providers/config.provider');

class AlbumController {

  sizes(req, res) {
    const cfg = configProvider.getConfigs()['album.sizes.yaml'];
    res.send({
      sizes: cfg
    });
  }

  covers(req, res) {
    const cfg = configProvider.getConfigs()['album.covers.yaml'];
    res.send({
      covers: cfg
    });
  }

  papers(req, res) {
    const cfg = configProvider.getConfigs()['album.papers.yaml'];
    res.send({
      papers: cfg
    });
  }

}

module.exports = new AlbumController();
