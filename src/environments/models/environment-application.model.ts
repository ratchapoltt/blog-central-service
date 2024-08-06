export class EnvironmentApplication {
  public readonly version: string;
  public readonly name: string;
  public readonly description: string;

  public constructor(data: Required<EnvironmentApplication>) {
    Object.assign(this, data);
  }
}
