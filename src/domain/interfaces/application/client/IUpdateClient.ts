import { ClientResponseDto } from '../../../client/dto/clientResponse.dto';
import { ClientUpdateRequestDto } from '../../../client/dto/clientRequest.dto';

export interface IUpdateClient {
  execute(
    id: number,
    payload: ClientUpdateRequestDto,
  ): Promise<ClientResponseDto>;
}
