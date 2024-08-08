import { EnvironmentApplication } from "./environment-application.model";
import { EnvironmentDatabase } from "./environment-database.model";
import { EnvironmentLogger } from "./environment-logger.model";
import { EnvironmentServer } from "./environment-server.model";
import { EnvironmentSwagger } from "./environment-swagger.model";

export class Environment {
  public readonly profile: string;
  public readonly application: EnvironmentApplication;
  public readonly server: EnvironmentServer;
  public readonly database: EnvironmentDatabase;
  public readonly logger: EnvironmentLogger;
  public readonly swagger: EnvironmentSwagger;

  public constructor(data: Required<Environment>) {
    Object.assign(this, data);
  }
}
