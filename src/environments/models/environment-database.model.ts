import { EmitFileTS, FileNameMigration, FileNameSeeder } from "@environment/types";

export class EnvironmentDatabaseSSL {
  public readonly rejectUnauthorized: boolean;

  public constructor(init: Required<EnvironmentDatabaseSSL>) {
    Object.assign(this, init);
  }
}

export class EnvironmentDatabaseDiscovery {
  public readonly disableDynamicFileAccess: boolean;

  public constructor(init: Required<EnvironmentDatabaseDiscovery>) {
    Object.assign(this, init);
  }
}

export class EnvironmentDatabaseMigration {
  public readonly path: string;
  public readonly fileName: FileNameMigration;
  public readonly emit: EmitFileTS;
  public readonly tableName: string;
  public readonly transactional: boolean;
  public readonly disableForeignKeys: boolean;
  public readonly allOrNothing: boolean;
  public readonly dropTables: boolean;
  public readonly safe: boolean;
  public readonly snapshot: boolean;

  public constructor(init: Required<EnvironmentDatabaseMigration>) {
    Object.assign(this, init);
  }
}

export class EnvironmentDatabaseSeeder {
  public readonly path: string;
  public readonly emit: EmitFileTS;
  public readonly fileName: FileNameSeeder;
  public readonly defaultSeeder: string;

  public constructor(init: Required<EnvironmentDatabaseSeeder>) {
    Object.assign(this, init);
  }
}

export class EnvironmentDatabaseGenerator {
  public readonly run: boolean;
  public readonly migration: EnvironmentDatabaseMigration;
  public readonly seeder: EnvironmentDatabaseSeeder;

  public constructor(init: Required<EnvironmentDatabaseGenerator>) {
    Object.assign(this, init);
  }
}

export class EnvironmentDatabase {
  public readonly port: number;
  public readonly hostname: string;
  public readonly username: string;
  public readonly password: string;
  public readonly dbName: string;
  public readonly collate: string;
  public readonly charset: string;
  public readonly timezone: string;
  public readonly connectTimeout: number;
  public readonly multipleStatements: boolean;
  public readonly ssl: EnvironmentDatabaseSSL;
  public readonly discovery: EnvironmentDatabaseDiscovery;
  public readonly generator: EnvironmentDatabaseGenerator;
  public readonly allowGlobalContext: boolean;
  public readonly forceUndefined: boolean;
  public readonly forceUtcTimezone: boolean;
  public readonly forceEntityConstructor: boolean;
  public readonly validate: boolean;
  public readonly strict: boolean;
  public readonly validateRequired: boolean;
  public readonly debug: string[];
  public readonly verbose: boolean;

  public constructor(init: Required<EnvironmentDatabase>) {
    Object.assign(this, init);
  }
}
