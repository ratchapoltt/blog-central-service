import { Environment, EnvironmentApplication, EnvironmentServer, EnvironmentSwagger } from "./models";

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
  swagger: new EnvironmentSwagger({
    enabled: process.env.SWAGGER_ENABLED === "true"
  })
});
