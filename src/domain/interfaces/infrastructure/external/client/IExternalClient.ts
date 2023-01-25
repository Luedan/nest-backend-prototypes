import { ClientResponseDto } from '../../../../client/dto/clientResponse.dto';

export interface IExternalClient {
  httpGetAll(): Promise<ClientResponseDto[]>;
}
