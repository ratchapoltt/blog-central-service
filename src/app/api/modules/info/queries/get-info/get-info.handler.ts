import { InformationApplicationResponse as Response } from "@app/dto";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { GetInfoQuery as Query } from "./get-info.query";

@QueryHandler(Query)
export class GetInfoHandler implements IQueryHandler<Query, Response> {
  public execute(_query: Query): Promise<Response> {
    return Promise.resolve(
      new Response({
        version: "1.0.0",
        name: "BlogCentral Service",
        description: "This service is responsible for managing the blog posts and comments"
      })
    );
  }
}
