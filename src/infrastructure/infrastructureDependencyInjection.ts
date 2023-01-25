import { Module } from '@nestjs/common';
import { RepositoryProviders } from './persistence/repository';
import { DatabaseModule } from './persistence/database/index';
import { Context } from './persistence/context/context';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { HttpClientConfig } from './external/configuration/httpClientConfig';
import { ExternalServices } from './external/index';

const providers = [...RepositoryProviders, ...ExternalServices, Context];
@Module({
  imports: [
    DatabaseModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useClass: HttpClientConfig,
    }),
  ],
  providers,
  exports: providers,
})
export class InfrastructureDependencyInjection {}
