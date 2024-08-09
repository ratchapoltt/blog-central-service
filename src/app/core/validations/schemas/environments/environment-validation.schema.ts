import * as Joi from "joi";

import {
  EnvApplicationValidSchema,
  EnvDatabaseDiscoveryValidSchema,
  EnvDatabaseGeneratorValidSchema,
  EnvDatabaseMigrationValidSchema,
  EnvDatabaseSSLValidSchema,
  EnvDatabaseSeederValidSchema,
  EnvDatabaseValidSchema,
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
    database: Joi.object(
      new EnvDatabaseValidSchema({
        port: Joi.number().port().required(),
        hostname: Joi.string().hostname().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        dbName: Joi.string().required(),
        collate: Joi.string().required(),
        charset: Joi.string().required(),
        timezone: Joi.string().required(),
        connectTimeout: Joi.number().required(),
        multipleStatements: Joi.boolean().required(),
        ssl: Joi.object(
          new EnvDatabaseSSLValidSchema({
            rejectUnauthorized: Joi.boolean().required()
          })
        ).required(),
        discovery: Joi.object<EnvDatabaseDiscoveryValidSchema>(
          new EnvDatabaseDiscoveryValidSchema({
            disableDynamicFileAccess: Joi.boolean()
          })
        ).required(),
        generator: Joi.object(
          new EnvDatabaseGeneratorValidSchema({
            run: Joi.boolean().required(),
            migration: Joi.object(
              new EnvDatabaseMigrationValidSchema({
                path: Joi.string().required(),
                fileName: Joi.function().arity(1).required(),
                emit: Joi.string().valid("ts").required(),
                tableName: Joi.string().required(),
                transactional: Joi.boolean().required(),
                disableForeignKeys: Joi.boolean().required(),
                allOrNothing: Joi.boolean().required(),
                dropTables: Joi.boolean().required(),
                safe: Joi.boolean().required(),
                snapshot: Joi.boolean().required()
              })
            ).required(),
            seeder: Joi.object(
              new EnvDatabaseSeederValidSchema({
                path: Joi.string().required(),
                emit: Joi.string().valid("ts").required(),
                fileName: Joi.function().arity(1).required(),
                defaultSeeder: Joi.string().required()
              })
            ).required()
          })
        ).required(),
        allowGlobalContext: Joi.boolean().required(),
        forceUndefined: Joi.boolean().required(),
        forceUtcTimezone: Joi.boolean().required(),
        forceEntityConstructor: Joi.boolean().required(),
        validate: Joi.boolean().required(),
        strict: Joi.boolean().required(),
        validateRequired: Joi.boolean().required(),
        debug: Joi.array()
          .items(Joi.string().valid("query", "query-params", "schema", "discovery", "info"))
          .required(),
        verbose: Joi.boolean().required()
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
