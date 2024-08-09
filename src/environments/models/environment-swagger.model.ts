export class EnvironmentSwagger {
  public readonly enabled: boolean;

  public constructor(init: Required<EnvironmentSwagger>) {
    Object.assign(this, init);
  }
}
