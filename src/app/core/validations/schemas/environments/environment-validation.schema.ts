import * as Joi from "joi";

import {
  EnvApplicationValidSchema,
  EnvLoggerStreamValidSchema,
  EnvLoggerValidSchema,
  EnvServerValidSchema,
  EnvSwaggerValidSchema,
  EnvValidSchema
} from "./models";

export const environmentValidationSchema: Joi.ObjectSchema<EnvValidSchema> = Joi.object(
  new EnvValidSchema({
    profile: Joi.string().valid("local", "development", "sit", "uat", "production", "test").required(),
    application: Joi.object(
      new EnvApplicationValidSchema({
        version: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required()
      })
    ).required(),
    server: Joi.object(
      new EnvServerValidSchema({
        port: Joi.number().port().required(),
        hostname: Joi.string().hostname().required()
      })
    ).required(),
    logger: Joi.object(
      new EnvLoggerValidSchema({
        level: Joi.string().valid("debug", "verbose", "info").required(),
        stream: Joi.object(
          new EnvLoggerStreamValidSchema({
            dirname: Joi.string().required()
          })
        ).required()
      })
    ).required(),
    swagger: Joi.object(
      new EnvSwaggerValidSchema({
        enabled: Joi.boolean().required()
      })
    ).required()
  })
).required();
