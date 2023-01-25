import { ClientResponseDto } from '../../../client/dto/clientResponse.dto';

export interface IDeleteClient {
  execute(id: number): Promise<ClientResponseDto>;
}
