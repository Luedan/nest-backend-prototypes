import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ClientResponseDto } from 'src/domain/client/dto/clientResponse.dto';
import { ClientRepository } from '../../../infrastructure/persistence/repository/client/clientRepository';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';
import { IGetOneClient } from '../../../domain/interfaces/application/client/IGetOneClient';

@Injectable()
export class GetOneClient implements IGetOneClient {
  constructor(
    private _clientRepository: ClientRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  async execute(id: number): Promise<ClientResponseDto> {
    const data = await this._clientRepository.findOne(id);
    return this._mapper.map(data, ClientEntity, ClientResponseDto);
  }
}
