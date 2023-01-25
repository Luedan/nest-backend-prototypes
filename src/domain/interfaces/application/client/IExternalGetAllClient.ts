import { ClientResponseDto } from '../../../client/dto/clientResponse.dto';

export interface IExternalGetAllClients {
  execute(): Promise<ClientResponseDto[]>;
}
