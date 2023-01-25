import { ClientResponseDto } from '../../../client/dto/clientResponse.dto';

export interface IGetOneClient {
  execute(id: number): Promise<ClientResponseDto>;
}
