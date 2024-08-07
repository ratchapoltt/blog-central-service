export class EnvironmentLoggerStream {
  public readonly dirname: string;

  public constructor(data: Required<EnvironmentLoggerStream>) {
    Object.assign(this, data);
  }
}

export class EnvironmentLogger {
  public readonly level: string;
  public readonly stream: EnvironmentLoggerStream;

  public constructor(data: Required<EnvironmentLogger>) {
    Object.assign(this, data);
  }
}
