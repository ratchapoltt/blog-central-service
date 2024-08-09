import * as Joi from "joi";

export class EnvDatabaseSSLValidSchema {
  public readonly rejectUnauthorized: Joi.BooleanSchema;

  public constructor(data: Required<EnvDatabaseSSLValidSchema>) {
    Object.assign(this, data);
  }
}

export class EnvDatabaseDiscoveryValidSchema {
  public readonly disableDynamicFileAccess: Joi.BooleanSchema;

  public constructor(data: Required<EnvDatabaseDiscoveryValidSchema>) {
    Object.assign(this, data);
  }
}

export class EnvDatabaseMigrationValidSchema {
  public readonly path: Joi.StringSchema;
  public readonly fileName: Joi.FunctionSchema;
  public readonly emit: Joi.StringSchema;
  public readonly tableName: Joi.StringSchema;
  public readonly transactional: Joi.BooleanSchema;
  public readonly disableForeignKeys: Joi.BooleanSchema;
  public readonly allOrNothing: Joi.BooleanSchema;
  public readonly dropTables: Joi.BooleanSchema;
  public readonly safe: Joi.BooleanSchema;
  public readonly snapshot: Joi.BooleanSchema;

  public constructor(data: Required<EnvDatabaseMigrationValidSchema>) {
    Object.assign(this, data);
  }
}

export class EnvDatabaseSeederValidSchema {
  public readonly path: Joi.StringSchema;
  public readonly emit: Joi.StringSchema;
  public readonly fileName: Joi.FunctionSchema;
  public readonly defaultSeeder: Joi.StringSchema;

  public constructor(data: Required<EnvDatabaseSeederValidSchema>) {
    Object.assign(this, data);
  }
}

export class EnvDatabaseGeneratorValidSchema {
  public readonly run: Joi.BooleanSchema;
  public readonly migration: Joi.ObjectSchema<EnvDatabaseMigrationValidSchema>;
  public readonly seeder: Joi.ObjectSchema<EnvDatabaseSeederValidSchema>;

  public constructor(data: Required<EnvDatabaseGeneratorValidSchema>) {
    Object.assign(this, data);
  }
}

export class EnvDatabaseValidSchema {
  public readonly port: Joi.NumberSchema;
  public readonly hostname: Joi.StringSchema;
  public readonly username: Joi.StringSchema;
  public readonly password: Joi.StringSchema;
  public readonly dbName: Joi.StringSchema;
  public readonly collate: Joi.StringSchema;
  public readonly charset: Joi.StringSchema;
  public readonly timezone: Joi.StringSchema;
  public readonly connectTimeout: Joi.NumberSchema;
  public readonly multipleStatements: Joi.BooleanSchema;
  public readonly ssl: Joi.ObjectSchema<EnvDatabaseSSLValidSchema>;
  public readonly discovery: Joi.ObjectSchema<EnvDatabaseDiscoveryValidSchema>;
  public readonly generator: Joi.ObjectSchema<EnvDatabaseGeneratorValidSchema>;
  public readonly allowGlobalContext: Joi.BooleanSchema;
  public readonly forceUndefined: Joi.BooleanSchema;
  public readonly forceUtcTimezone: Joi.BooleanSchema;
  public readonly forceEntityConstructor: Joi.BooleanSchema;
  public readonly validate: Joi.BooleanSchema;
  public readonly strict: Joi.BooleanSchema;
  public readonly validateRequired: Joi.BooleanSchema;
  public readonly debug: Joi.ArraySchema<string[]>;
  public readonly verbose: Joi.BooleanSchema;

  public constructor(data: Required<EnvDatabaseValidSchema>) {
    Object.assign(this, data);
  }
}
