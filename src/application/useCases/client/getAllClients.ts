import { Injectable } from '@nestjs/common';
import { IGetAllClients } from '../../../domain/interfaces/application/client/IGetAllClients';
import { ClientResponseDto } from 'src/domain/client/dto/clientResponse.dto';
import { ClientRepository } from '../../../infrastructure/persistence/repository/client/clientRepository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';

@Injectable()
export class GetAllClients implements IGetAllClients {
  constructor(
    private _clientRepository: ClientRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  async execute(): Promise<ClientResponseDto[]> {
    const data = await this._clientRepository.findAll();
    return this._mapper.mapArray(data, ClientEntity, ClientResponseDto);
  }
}
