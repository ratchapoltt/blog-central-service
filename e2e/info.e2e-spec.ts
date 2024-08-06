import { InfoModule } from "@app/api";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Test, TestingModule } from "@nestjs/testing";

import request from "supertest";

describe("InfoController (e2e)", (): void => {
  let application: NestExpressApplication;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfoModule]
    }).compile();

    application = module.createNestApplication();

    application.useLogger(false);

    await application.init();
  });

  it("/ (GET)", (): request.Test => {
    return request(application.getHttpServer()).get("/").expect(200).expect({
      version: "1.0.0",
      name: "BlogCentral Service",
      description: "This service is responsible for managing the blog posts and comments"
    });
  });
});
