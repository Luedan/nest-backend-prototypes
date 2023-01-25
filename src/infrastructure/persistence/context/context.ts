import { Injectable, OnApplicationBootstrap, Inject } from '@nestjs/common';
import { IContext } from '../../../domain/interfaces/infrastructure/persistence/context/iContext';
import { ClientEntity } from 'src/domain/client/entity/clientEntity';
import { IGenericRepository } from 'src/domain/interfaces/infrastructure/persistence/context/iGenericRepository';
import { DataSource } from 'typeorm';
import { GenericRepository } from '../../../domain/interfaces/infrastructure/persistence/context/genericRepository';

@Injectable()
export class Context implements IContext, OnApplicationBootstrap {
  // Context Entities
  client: IGenericRepository<ClientEntity>;

  constructor(@Inject('IDatabase') private database: DataSource) {}

  onApplicationBootstrap() {
    this.client = new GenericRepository<ClientEntity>(
      ClientEntity,
      this.database,
    );
  }
}
