import * as Joi from "joi";

export class EnvApplicationValidSchema {
  public readonly version: Joi.StringSchema;
  public readonly name: Joi.StringSchema;
  public readonly description: Joi.StringSchema;

  public constructor(data: Required<EnvApplicationValidSchema>) {
    Object.assign(this, data);
  }
}
