import {
  Environment,
  EnvironmentApplication,
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
