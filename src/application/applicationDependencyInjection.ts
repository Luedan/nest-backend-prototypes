import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common';
import { InfrastructureDependencyInjection } from '../infrastructure/infrastructureDependencyInjection';
import { MapperDependencyInjection } from './mapper/index';
import { useCaseProviders } from './useCases/index';

const providers: Provider[] = [...useCaseProviders];
@Module({
  imports: [InfrastructureDependencyInjection, MapperDependencyInjection],
  providers,
  exports: providers,
})
export class ApplicationDependencyInjection {}
