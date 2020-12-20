module.exports = {
    apps : [{
      name: "smart house",
      script: "next build",
      env: {
        PORT: 3001,
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      }
    }]
  }