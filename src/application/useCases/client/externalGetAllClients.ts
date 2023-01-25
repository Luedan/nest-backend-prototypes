import { Injectable } from '@nestjs/common';
import { ClientResponseDto } from 'src/domain/client/dto/clientResponse.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';
import { IExternalGetAllClients } from '../../../domain/interfaces/application/client/IExternalGetAllClient';
import { ExternalClient } from '../../../infrastructure/external/client/externalClient';

@Injectable()
export class ExternalGetAllClients implements IExternalGetAllClients {
  constructor(
    private _externalClient: ExternalClient,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  async execute(): Promise<ClientResponseDto[]> {
    const data = await this._externalClient.httpGetAll();
    return this._mapper.mapArray(data, ClientEntity, ClientResponseDto);
  }
}
