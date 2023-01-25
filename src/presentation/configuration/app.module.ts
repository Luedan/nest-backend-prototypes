import { Module } from '@nestjs/common';
import { ControllersDependencyInjection } from '../controllers/index';

@Module({
  imports: [ControllersDependencyInjection],
})
export class AppModule {}
