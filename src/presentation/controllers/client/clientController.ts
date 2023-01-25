import { ApiTags, ApiResponse } from '@nestjs/swagger';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { GetAllClients } from '../../../application/useCases/client/getAllClients';
import { ClientResponseDto } from '../../../domain/client/dto/clientResponse.dto';
import { CreateClient } from '../../../application/useCases/client/createClient';
import {
  ClientRequestDto,
  ClientUpdateRequestDto,
} from '../../../domain/client/dto/clientRequest.dto';
import { UpdateClient } from '../../../application/useCases/client/updateClient';
import { DeleteClient } from '../../../application/useCases/client/deleteClient';
import { GetOneClient } from '../../../application/useCases/client/getOneClient';
import { ExternalGetAllClients } from '../../../application/useCases/client/externalGetAllClients';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(
    private _getAllClient: GetAllClients,
    private _createClient: CreateClient,
    private _updateClient: UpdateClient,
    private _deleteClient: DeleteClient,
    private _getOne: GetOneClient,
    private _externalGetAll: ExternalGetAllClients,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: ClientResponseDto,
    isArray: true,
  })
  getAll(): Promise<ClientResponseDto[]> {
    return this._getAllClient.execute();
  }

  @Get('/external')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: ClientResponseDto,
    isArray: true,
  })
  getAllExternal(): Promise<ClientResponseDto[]> {
    return this._externalGetAll.execute();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: ClientResponseDto,
  })
  getOne(@Param('id', ParseIntPipe) id: number): Promise<ClientResponseDto> {
    return this._getOne.execute(id);
  }

  @Post()
  @ApiResponse({
    type: ClientResponseDto,
  })
  create(@Body() body: ClientRequestDto): Promise<ClientResponseDto> {
    return this._createClient.execute(body);
  }

  @Put(':id')
  @ApiResponse({
    type: ClientResponseDto,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ClientUpdateRequestDto,
  ): Promise<ClientResponseDto> {
    return this._updateClient.execute(id, body);
  }

  @Delete(':id')
  @ApiResponse({
    type: ClientResponseDto,
  })
  delete(@Param('id', ParseIntPipe) id: number): Promise<ClientResponseDto> {
    return this._deleteClient.execute(id);
  }
}
