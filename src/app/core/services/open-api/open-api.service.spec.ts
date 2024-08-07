import { Test, TestingModule } from "@nestjs/testing";

import { OpenApiService } from "./open-api.service";

describe("OpenApiService", (): void => {
  let service: OpenApiService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenApiService]
    }).compile();

    module.useLogger(false);

    service = module.get(OpenApiService);
  });

  it("Should be defined", (): void => {
    expect(service).toBeDefined();
  });
});
