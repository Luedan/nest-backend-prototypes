import { Injectable } from '@nestjs/common';
import { ClientResponseDto } from 'src/domain/client/dto/clientResponse.dto';
import { ClientRepository } from '../../../infrastructure/persistence/repository/client/clientRepository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';
import {
  ClientUpdateRequestDto,
  ClientRequestDto,
} from '../../../domain/client/dto/clientRequest.dto';
import { IUpdateClient } from '../../../domain/interfaces/application/client/IUpdateClient';

@Injectable()
export class UpdateClient implements IUpdateClient {
  constructor(
    private _clientRepository: ClientRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  async execute(
    id: number,
    payload: ClientUpdateRequestDto,
  ): Promise<ClientResponseDto> {
    const mapPayload = this._mapper.map(
      payload,
      ClientRequestDto,
      ClientEntity,
    );
    const data = await this._clientRepository.update(id, mapPayload);
    return this._mapper.map(data, ClientEntity, ClientResponseDto);
  }
}
