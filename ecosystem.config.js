module.exports = {
    apps : [{
      name: "smart-house",
      script: "node server.js",
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }