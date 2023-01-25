import { Injectable } from '@nestjs/common';
import { ClientResponseDto } from 'src/domain/client/dto/clientResponse.dto';
import { ClientRepository } from '../../../infrastructure/persistence/repository/client/clientRepository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';
import { ICreateClient } from '../../../domain/interfaces/application/client/ICreateClient';
import { ClientRequestDto } from '../../../domain/client/dto/clientRequest.dto';

@Injectable()
export class CreateClient implements ICreateClient {
  constructor(
    private _clientRepository: ClientRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  async execute(payload: ClientRequestDto): Promise<ClientResponseDto> {
    const mapPayload = this._mapper.map(
      payload,
      ClientRequestDto,
      ClientEntity,
    );
    const data = await this._clientRepository.create(mapPayload);
    return this._mapper.map(data, ClientEntity, ClientResponseDto);
  }
}
