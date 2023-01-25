import { ClientResponseDto } from '../../../../../client/dto/clientResponse.dto';
import {
  ClientRequestDto,
  ClientUpdateRequestDto,
} from '../../../../../client/dto/clientRequest.dto';

/**
 * @interface IClientRepository interface
 */

export interface IClientRepository {
  findAll(): Promise<ClientResponseDto[]>;

  findOne(id: number): Promise<ClientResponseDto>;

  create(payload: ClientRequestDto): Promise<ClientResponseDto>;

  update(
    id: number,
    payload: ClientUpdateRequestDto,
  ): Promise<ClientResponseDto>;

  delete(id: number): Promise<ClientResponseDto>;
}
