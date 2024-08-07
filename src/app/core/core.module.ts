import { winstonConfiguration } from "@configuration";
import { environment } from "@environment";
import { Module, OnModuleInit } from "@nestjs/common";

import * as Joi from "joi";

import { WinstonModule } from "nest-winston";

import { ValidEnvironmentException } from "./exceptions";
import { OpenApiService } from "./services";
import { environmentValidationSchema } from "./validations";

@Module({
  imports: [WinstonModule.forRoot({ ...winstonConfiguration })],
  providers: [OpenApiService],
  exports: [OpenApiService]
})
export class CoreModule implements OnModuleInit {
  private validEnvironment(): void {
    const { error }: Joi.ValidationResult = environmentValidationSchema.validate(environment);

    if (error !== null && error !== undefined) {
      throw new ValidEnvironmentException(
        `An error occurred during the environment value validation because ${error.message}`
      );
    }
  }

  public onModuleInit(): void {
    this.validEnvironment();
  }
}
