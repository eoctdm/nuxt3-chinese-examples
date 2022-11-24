
module.exports = {
  apps: [
    {
      name: 'Nuxt3',
      exec_mode: 'cluster',
      instances: '3',
      script: './.output/server/index.mjs',
      env: {
          "PORT": 8588
      },
    }
  ]
}
