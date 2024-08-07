import * as Joi from "joi";

export class EnvLoggerStreamValidSchema {
  public readonly dirname: Joi.StringSchema;

  public constructor(data: Required<EnvLoggerStreamValidSchema>) {
    Object.assign(this, data);
  }
}

export class EnvLoggerValidSchema {
  public readonly level: Joi.StringSchema;
  public readonly stream: Joi.ObjectSchema<EnvLoggerStreamValidSchema>;

  public constructor(data: Required<EnvLoggerValidSchema>) {
    Object.assign(this, data);
  }
}
