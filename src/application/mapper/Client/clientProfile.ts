import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile, createMap } from '@automapper/core';
import { ClientEntity } from '../../../domain/client/entity/clientEntity';
import { ClientResponseDto } from '../../../domain/client/dto/clientResponse.dto';
import {
  ClientRequestDto,
  ClientUpdateRequestDto,
} from '../../../domain/client/dto/clientRequest.dto';

@Injectable()
export class ClientProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, ClientEntity, ClientResponseDto);
      createMap(mapper, ClientRequestDto, ClientEntity);
    };
  }
}
