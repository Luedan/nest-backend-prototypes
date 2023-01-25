import { ClientResponseDto } from '../../../client/dto/clientResponse.dto';

export interface IGetAllClients {
  execute(): Promise<ClientResponseDto[]>;
}
