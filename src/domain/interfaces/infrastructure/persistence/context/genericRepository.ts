import { IGenericRepository } from './iGenericRepository';
import {
  FindManyOptions,
  InsertResult,
  UpdateResult,
  ObjectLiteral,
  DataSource,
  DeepPartial,
  Repository,
  FindOneOptions,
} from 'typeorm';

export class GenericRepository<E extends ObjectLiteral>
  implements IGenericRepository<E>
{
  /**
   * @private Repository
   */
  private _repository: Repository<E>;

  /**
   * @constructor class constructor
   */
  constructor(private entity: new () => E, private instance: DataSource) {
    this._repository = this.instance.getRepository(this.entity);
  }

  /**
   * @method getAll Get all document objects.
   */
  public getAll(options?: FindManyOptions<E>): Promise<E[]> {
    return this._repository.find(options);
  }

  /**
   * @method getOne Get one document object.
   */
  public getOne(options: FindOneOptions<E>): Promise<E | null> {
    return this._repository.findOne(options);
  }

  /**
   * @method create insert a document object.
   */
  public create(entity: DeepPartial<E>): Promise<InsertResult> {
    return this._repository.insert({
      ...entity,
    });
  }

  /**
   * @method update update a document object.
   */
  public update(
    criteria: any,
    partialEntity: DeepPartial<E>,
  ): Promise<UpdateResult> {
    return this._repository.update(criteria, {
      ...partialEntity,
    });
  }

  /**
   * @method delete delete a document object.
   */
  public delete(
    criteria: any,
    partialEntity: DeepPartial<E>,
  ): Promise<UpdateResult> {
    return this._repository.update(criteria, {
      ...partialEntity,
    });
  }
}
