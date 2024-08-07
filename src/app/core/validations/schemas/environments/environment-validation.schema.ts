import * as Joi from "joi";

import { EnvApplicationValidSchema, EnvServerValidSchema, EnvSwaggerValidSchema, EnvValidSchema } from "./models";

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
    swagger: Joi.object(
      new EnvSwaggerValidSchema({
        enabled: Joi.boolean().required()
      })
    ).required()
  })
).required();
