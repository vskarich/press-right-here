module.exports = function () {
  return  {
    getEnv: function() {
      if (process.env.IS_DEV) {
        return 'dev';
      } else {
        return 'prod';
      }
    }
  };
};
