import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { GetInfoHandler } from "./queries";

import { InfoController } from "./info.controller";
import { InfoService } from "./info.service";

@Module({
  imports: [CqrsModule],
  controllers: [InfoController],
  providers: [GetInfoHandler, InfoService]
})
export class InfoModule {}
