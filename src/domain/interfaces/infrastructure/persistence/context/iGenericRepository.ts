import {
  DeepPartial,
  FindManyOptions,
  InsertResult,
  UpdateResult,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';

export abstract class IGenericRepository<E> {
  /**
   * @abstract getAll
   */
  abstract getAll(options?: FindManyOptions<E>): Promise<E[]>;

  /**
   * @abstract getOne
   */
  abstract getOne(options: FindOneOptions<E>): Promise<E | null>;

  /**
   * @abstract create
   */
  abstract create(entity: DeepPartial<E>): Promise<InsertResult>;

  /**
   * @abstract update
   */
  abstract update(
    criteria:
      | string
      | number
      | string[]
      | Date
      | number[]
      | Date[]
      | FindOptionsWhere<E>,
    partialEntity: DeepPartial<E>,
  ): Promise<UpdateResult>;

  /**
   * @abstract delete
   */
  abstract delete(
    criteria:
      | string
      | number
      | string[]
      | Date
      | number[]
      | Date[]
      | FindOptionsWhere<E>,
    partialEntity: DeepPartial<E>,
  ): Promise<UpdateResult>;
}
