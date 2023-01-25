import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('API REST PROTOTYPE - SIMPLE CLEAN ARCHITECTURE - @LuedanDev')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Docs', app, document);
};

export default swagger;
