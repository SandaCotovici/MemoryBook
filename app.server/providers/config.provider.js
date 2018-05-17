const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const CFG_PATHS = [
  path.join(__dirname, '..', 'configs', 'album')
];


class ConfigProvider {

  constructor(){
    this.configs = {}
  }

  loadConfigs() {
    CFG_PATHS.forEach(dir => {
      fs.readdir(dir, (err, files) => {
        files.forEach(file => {
          try {
            this.configs[file] = yaml.safeLoad(fs.readFileSync(path.join(dir, file), 'utf8'));
            console.log(`[Server] Configuration file: ${file} loaded`);
          } catch (e) {
            console.log(`[Server] Configuration file: ${file} failed to load`);
          }
        });
      })
    });
  }

  getConfigs() {
    return this.configs;
  }

}

module.exports = new ConfigProvider();
