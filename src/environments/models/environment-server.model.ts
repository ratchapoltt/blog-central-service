export class EnvironmentServer {
  public readonly port: number;
  public readonly hostname: string;

  public constructor(init: Required<EnvironmentServer>) {
    Object.assign(this, init);
  }
}
