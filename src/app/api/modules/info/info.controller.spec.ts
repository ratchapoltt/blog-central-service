import { InformationApplicationResponse } from "@app/dto";
import { CqrsModule } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";

import { GetInfoHandler } from "./queries";

import { InfoController } from "./info.controller";
import { InfoService } from "./info.service";

describe("InfoController", (): void => {
  let controller: InfoController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [InfoController],
      providers: [GetInfoHandler, InfoService]
    }).compile();

    module.useLogger(false);

    module.init();

    controller = module.get(InfoController);
  });

  it("Should be defined", (): void => {
    expect(controller).toBeDefined();
  });

  describe("Success cases", (): void => {
    it("Should return detailed application information object", async (): Promise<void> => {
      const expected: InformationApplicationResponse = new InformationApplicationResponse({
        version: "1.0.0",
        name: "BlogCentral Service",
        description: "This service is responsible for managing the blog posts and comments"
      });

      expect(await controller.index()).toEqual(expected);
    });
  });
});
