import { Injectable } from '@nestjs/common';
import { ClientResponseDto } from 'src/domain/client/dto/clientResponse.dto';
import { ClientRepository } from '../../../infrastructure/persistence/repository/client/clientRepository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';
import { IDeleteClient } from '../../../domain/interfaces/application/client/IDeleteClient';

@Injectable()
export class DeleteClient implements IDeleteClient {
  constructor(
    private _clientRepository: ClientRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  async execute(id: number): Promise<ClientResponseDto> {
    const data = await this._clientRepository.delete(id);
    return this._mapper.map(data, ClientEntity, ClientResponseDto);
  }
}
