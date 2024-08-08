import {
  Environment,
  EnvironmentApplication,
  EnvironmentDatabase,
  EnvironmentDatabaseSSL,
  EnvironmentLogger,
  EnvironmentLoggerStream,
  EnvironmentServer,
  EnvironmentSwagger
} from "./models";

export const environment: Environment = new Environment({
  profile: process.env.PROFILE,
  application: new EnvironmentApplication({
    version: process.env.APPLICATION_VERSION,
    name: process.env.APPLICATION_NAME,
    description: process.env.APPLICATION_DESCRIPTION
  }),
  server: new EnvironmentServer({
    port: Number.parseInt(process.env.SERVER_PORT, 10),
    hostname: process.env.SERVER_HOSTNAME
  }),
  database: new EnvironmentDatabase({
    port: Number.parseInt(process.env.DATABASE_PORT, 10),
    hostname: process.env.DATABASE_HOSTNAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_DB_NAME,
    collate: process.env.DATABASE_COLLATE,
    charset: process.env.DATABASE_CHARSET,
    timezone: process.env.DATABASE_TIMEZONE,
    connectTimeout: Number.parseInt(process.env.DATABASE_CONNECT_TIMEOUT, 10),
    multipleStatements: process.env.DATABASE_MULTIPLE_STATEMENTS === "true",
    ssl: new EnvironmentDatabaseSSL({
      rejectUnauthorized: process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === "true"
    }),
    isMigration: process.env.DATABASE_IS_MIGRATION === "true"
  }),
  logger: new EnvironmentLogger({
    level: process.env.LOGGER_LEVEL,
    stream: new EnvironmentLoggerStream({
      dirname: process.env.LOGGER_STREAM_DIRNAME
    })
  }),
  swagger: new EnvironmentSwagger({
    enabled: process.env.SWAGGER_ENABLED === "true"
  })
});
