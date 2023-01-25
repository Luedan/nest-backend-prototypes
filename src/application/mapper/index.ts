import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module, Provider } from '@nestjs/common';
import { ClientProfile } from './Client/clientProfile';

const providers: Provider[] = [ClientProfile];
@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers,
  exports: [...providers],
})
export class MapperDependencyInjection {}
