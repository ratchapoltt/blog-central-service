export class EnvironmentApplication {
  public readonly version: string;
  public readonly name: string;
  public readonly description: string;

  public constructor(init: Required<EnvironmentApplication>) {
    Object.assign(this, init);
  }
}
