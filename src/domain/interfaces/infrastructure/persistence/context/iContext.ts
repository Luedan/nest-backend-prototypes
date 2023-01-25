import { IGenericRepository } from './iGenericRepository';
import { ClientEntity } from '../../../../client/entity/clientEntity';

export abstract class IContext {
  /**
   * @abstract client
   */
  abstract client: IGenericRepository<ClientEntity>;
}
