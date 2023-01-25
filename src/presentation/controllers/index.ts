import { Module } from '@nestjs/common';
import { ClientController } from './client/clientController';
import { ApplicationDependencyInjection } from '../../application/applicationDependencyInjection';

const controllers = [ClientController];
@Module({
  imports: [ApplicationDependencyInjection],
  controllers,
})
export class ControllersDependencyInjection {}
