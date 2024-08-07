import * as Joi from "joi";

export class EnvServerValidSchema {
  public readonly port: Joi.NumberSchema;
  public readonly hostname: Joi.StringSchema;

  public constructor(data: Required<EnvServerValidSchema>) {
    Object.assign(this, data);
  }
}
