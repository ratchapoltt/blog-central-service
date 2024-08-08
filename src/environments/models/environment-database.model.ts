export class EnvironmentDatabaseSSL {
  public readonly rejectUnauthorized: boolean;

  public constructor(data: Required<EnvironmentDatabaseSSL>) {
    Object.assign(this, data);
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
  public readonly isMigration: boolean;

  public constructor(data: Required<EnvironmentDatabase>) {
    Object.assign(this, data);
  }
}
