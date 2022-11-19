//https://pm2.keymetrics.io
module.exports = {
  apps: [
    {
      name: 'Nuxt3',
      exec_mode: 'cluster',
      instances: '3', //max表示根据主机CPU核数决定实例数量
      script: './.output/server/index.mjs',
      env: {
          "PORT": 8588
      },
    }
  ]
}
