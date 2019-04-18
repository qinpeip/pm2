module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '155.138.199.62 ',
      ref  : 'origin/master',
      repo : 'git@github.com:qinpeip/pm2.git',
      path : '/root/pm2',
      "pre-setup": "echo 'This is a pre-setup command'",
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production',
      "ssh_options":"StrictHostKeyChecking=no",
      "env":{
        "NODE_ENV":"production"
      }
    }
  }
};
