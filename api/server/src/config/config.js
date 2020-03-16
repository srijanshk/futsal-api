require('dotenv').config();


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    'use_env_variable': process.env.DATABASE_URL_DEV,
    'dialect': 'postgres'
  },

  test: {
    'use_env_variable': process.env.DATABASE_URL_TEST,
    'dialect': 'postgres',
    logging: false // remove logs

  },

  production: {
    'use_env_variable': process.env.DATABASE_URL_PRODUCTION,
    'dialect': 'postgres',
    'ssl': true,
    'dialectOptions': {
      'ssl': {
        'require': true
      }
    }

  }
};
