// Initializes the `chainrenter-3` service on path `/chainrenter-3`
const createService = require('feathers-sequelize');
const createModel = require('../../models/chainrenter-3.model');
const hooks = require('./chainrenter-3.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chainrenter-3', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('chainrenter-3');

  service.hooks(hooks);
};
