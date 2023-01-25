import { ClientResponseDto } from '../../../client/dto/clientResponse.dto';
import { ClientRequestDto } from '../../../client/dto/clientRequest.dto';

export interface ICreateClient {
  execute(payload: ClientRequestDto): Promise<ClientResponseDto>;
}
