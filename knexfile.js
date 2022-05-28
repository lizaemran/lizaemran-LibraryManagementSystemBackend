module.exports = {
    development: {
      client: 'pg',
      debug:true,
      connection: {
        database: process.env.DATABASE_NAME || 'postgres',
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_USER_PW || 'password',
        port: process.env.POSTGRES_PORT || 5432,
        host: process.env.POSTGRES_HOST || 'localhost',
        dialect:"postgres",
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      },
      pool : {
        min : 0,
        max : 10,
        idleTimeoutMillis: 1000
      }

    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      },
      ssl: {
        rejectUnauthorized: false
      }
    }
  };