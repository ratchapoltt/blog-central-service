export class EnvironmentLoggerStream {
  public readonly dirname: string;

  public constructor(init: Required<EnvironmentLoggerStream>) {
    Object.assign(this, init);
  }
}

export class EnvironmentLogger {
  public readonly level: string;
  public readonly stream: EnvironmentLoggerStream;

  public constructor(init: Required<EnvironmentLogger>) {
    Object.assign(this, init);
  }
}
