export class InformationApplicationResponse {
  public version: string;
  public name: string;
  public description: string;

  public constructor(data?: Partial<InformationApplicationResponse>) {
    if (data !== null && data !== undefined) {
      Object.assign(this, data);
    }
  }
}
