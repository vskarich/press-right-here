const chainrenter3 = require('./chainrenter-3/chainrenter-3.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(chainrenter3);
};
