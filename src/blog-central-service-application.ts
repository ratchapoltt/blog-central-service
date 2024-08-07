import { environment } from "@environment";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app/app.module";

export class BlogCentralServiceApplication {
  private static readonly logger: Logger = new Logger(BlogCentralServiceApplication.name);

  public static async run(): Promise<void> {
    try {
      const application: NestExpressApplication = await NestFactory.create(AppModule);

      await application.init();
      await application.listen(environment.server.port, environment.server.hostname);

      this.logger.log(`Application active on ${environment.profile} profile`);
      this.logger.log(`Application is running on ${await application.getUrl()}`);
      this.logger.log("Application service started successfully");
    } catch (error) {
      this.logger.fatal(error);
    }
  }
}

BlogCentralServiceApplication.run();
