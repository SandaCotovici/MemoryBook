const express = require('express');
const router = express.Router();
const configProvider = require('../providers/config.provider');



router.get('/album/sizes', (req, res) => {
  const cfg = configProvider.getConfigs()['album.sizes.yaml'];
  res.send({
    sizes: cfg
  });
});

router.get('/album/covers', (req, res) => {
  const cfg = configProvider.getConfigs()['album.covers.yaml'];
  res.send({
    covers: cfg
  });
});

router.get('/album/papers', (req, res) => {
  const cfg = configProvider.getConfigs()['album.paper.yaml'];
  res.send({
    papers: cfg
  });
});

module.exports = router;
