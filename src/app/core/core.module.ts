import { mikroOrmConfiguration, winstonConfiguration } from "@configuration";
import { environment } from "@environment";
import { MikroOrmMiddleware, MikroOrmModule } from "@mikro-orm/nestjs";
import { MiddlewareConsumer, Module, NestModule, OnModuleInit, RequestMethod } from "@nestjs/common";

import * as Joi from "joi";

import { WinstonModule } from "nest-winston";

import { ValidEnvironmentException } from "./exceptions";
import { OpenApiService } from "./services";
import { environmentValidationSchema } from "./validations";

@Module({
  imports: [
    WinstonModule.forRoot({
      ...winstonConfiguration
    }),
    MikroOrmModule.forRoot({
      ...mikroOrmConfiguration,
      autoLoadEntities: false
    })
  ],
  providers: [OpenApiService],
  exports: [OpenApiService]
})
export class CoreModule implements NestModule, OnModuleInit {
  private validEnvironment(): void {
    const { error }: Joi.ValidationResult = environmentValidationSchema.validate(environment);

    if (error !== null && error !== undefined) {
      throw new ValidEnvironmentException(
        `An error occurred during the environment value validation because ${error.message}`
      );
    }
  }

  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(MikroOrmMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
  }

  public onModuleInit(): void {
    this.validEnvironment();
  }
}
