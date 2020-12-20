module.exports = {
    apps : [{
      name: "smart house",
      script: "next build",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }