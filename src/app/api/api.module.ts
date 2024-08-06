import { Module } from "@nestjs/common";

import { ApiRoutingModule } from "./api-routing.module";

@Module({
  imports: [ApiRoutingModule]
})
export class ApiModule {}
