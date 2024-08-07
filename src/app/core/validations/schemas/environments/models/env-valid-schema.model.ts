import * as Joi from "joi";

import { EnvApplicationValidSchema } from "./env-application-valid-schema.model";
import { EnvLoggerValidSchema } from "./env-logger-valid-schema.model";
import { EnvServerValidSchema } from "./env-server-valid-schema.model";
import { EnvSwaggerValidSchema } from "./env-swagger-valid-schema.model";

export class EnvValidSchema {
  public readonly profile: Joi.StringSchema;
  public readonly application: Joi.ObjectSchema<EnvApplicationValidSchema>;
  public readonly server: Joi.ObjectSchema<EnvServerValidSchema>;
  public readonly logger: Joi.ObjectSchema<EnvLoggerValidSchema>;
  public readonly swagger: Joi.ObjectSchema<EnvSwaggerValidSchema>;

  public constructor(data: Required<EnvValidSchema>) {
    Object.assign(this, data);
  }
}
