import {
  Environment,
  EnvironmentApplication,
  EnvironmentDatabase,
  EnvironmentDatabaseDiscovery,
  EnvironmentDatabaseGenerator,
  EnvironmentDatabaseMigration,
  EnvironmentDatabaseSSL,
  EnvironmentDatabaseSeeder,
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
    discovery: new EnvironmentDatabaseDiscovery({
      disableDynamicFileAccess: true
    }),
    generator: new EnvironmentDatabaseGenerator({
      run: process.env.DATABASE_GENERATOR_RUN === "true",
      migration: new EnvironmentDatabaseMigration({
        path: "./migrations",
        fileName: (timestamp: string): string => {
          return `${timestamp}-migration`;
        },
        emit: "ts",
        tableName: "migrations",
        transactional: true,
        disableForeignKeys: false,
        allOrNothing: true,
        dropTables: false,
        safe: false,
        snapshot: false
      }),
      seeder: new EnvironmentDatabaseSeeder({
        path: "./seeds",
        emit: "ts",
        fileName: (className: string): string => {
          return `${className.replaceAll(/([\da-z])([A-Z])/g, "$1-$2").toLowerCase()}`;
        },
        defaultSeeder: "InitialSeeder"
      })
    }),
    allowGlobalContext: false,
    forceUndefined: false,
    forceUtcTimezone: true,
    forceEntityConstructor: false,
    validate: true,
    strict: true,
    validateRequired: true,
    debug: process.env.DATABASE_DEBUG?.split(",").map((value: string): string => {
      return value.trim();
    }),
    verbose: false
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
