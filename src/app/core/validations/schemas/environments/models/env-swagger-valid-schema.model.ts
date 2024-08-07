import * as Joi from "joi";

export class EnvSwaggerValidSchema {
  public readonly enabled: Joi.BooleanSchema;

  public constructor(data: Required<EnvSwaggerValidSchema>) {
    Object.assign(this, data);
  }
}
