export class EnvironmentSwagger {
  public readonly enabled: boolean;

  public constructor(data: Required<EnvironmentSwagger>) {
    Object.assign(this, data);
  }
}
