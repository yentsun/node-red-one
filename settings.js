module.exports = {
  uiPort: process.env.PORT || 1880,
  mqttReconnectTime: 15000,
  serialReconnectTime: 15000,
  debugMaxLength: 1000,

  functionGlobalContext: {
    //moment: require('moment')
  },

  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
