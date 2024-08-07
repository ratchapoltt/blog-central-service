import { environment } from "@environment";
import { Injectable, Logger } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { ParameterObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

@Injectable()
export class OpenApiService {
  private readonly logger: Logger = new Logger("RoutesResolver");

  private readonly path: string = "api-docs/swagger";

  private getGlobalParameters(): ParameterObject[] {
    return [
      {
        name: "accept-language",
        in: "header",
        schema: {
          enum: ["th-TH", "en-US"],
          default: "th-TH"
        },
        required: true
      }
    ];
  }

  public run(application: NestExpressApplication): void {
    if (environment.swagger.enabled) {
      const documentBuilder: DocumentBuilder = new DocumentBuilder();
      const config: Omit<OpenAPIObject, "paths"> = documentBuilder
        .setVersion(environment.application.version)
        .setTitle(environment.application.name)
        .setDescription(environment.application.description)
        .addGlobalParameters(...this.getGlobalParameters())
        .build();

      const document: OpenAPIObject = SwaggerModule.createDocument(application, config, {
        deepScanRoutes: true,
        ignoreGlobalPrefix: false
      });

      SwaggerModule.setup(`${this.path}-ui`, application, document, {
        jsonDocumentUrl: `${this.path}-json`,
        yamlDocumentUrl: `${this.path}-yaml`,
        useGlobalPrefix: false,
        swaggerOptions: {
          filter: true
        },
        customCss: `
          .parameters-col_name {
            width: 40%;
          }

          .parameters-col_description {
            width: 60%;
          }
        `
      });

      this.logger.log(`Swagger UI {/${this.path}-ui}:`);
      this.logger.log(`Swagger JSON {/${this.path}-json}:`);
      this.logger.log(`Swagger YAML {/${this.path}-yaml}:`);
    }
  }
}
