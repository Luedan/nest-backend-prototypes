import { Context } from '../../context/context';
import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { ClientResponseDto } from '../../../../domain/client/dto/clientResponse.dto';
import {
  ClientRequestDto,
  ClientUpdateRequestDto,
} from '../../../../domain/client/dto/clientRequest.dto';
import { IClientRepository } from '../../../../domain/interfaces/infrastructure/persistence/repository/client/IClientRepository';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(private _context: Context) {}

  async findAll(): Promise<ClientResponseDto[]> {
    try {
      const data = await this._context.client.getAll();
      if (!data) throw new NotFoundException('No se encuentran resultados.');
      return data;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error, 'Algo salió mal.');
    }
  }

  async findOne(id: number): Promise<ClientResponseDto> {
    try {
      const where = { id };
      const data = await this._context.client.getOne({ where });

      if (!data) throw new NotFoundException('No se encuentran resultados.');

      return data;
    } catch (error) {
      throw new BadRequestException(error, 'Algo salió mal.');
    }
  }

  async create(payload: ClientRequestDto): Promise<ClientResponseDto> {
    try {
      const data = await this._context.client.create(payload);
      return { id: data.raw.insertId, ...payload };
    } catch (error) {
      throw new BadRequestException(error, 'Algo Salio mal.');
    }
  }

  async update(
    id: number,
    payload: ClientUpdateRequestDto,
  ): Promise<ClientResponseDto> {
    try {
      console.log(id, payload, 123123);
      const where = { id };

      const client = await this.findOne(id);

      if (!client)
        throw new NotFoundException(
          'No existe un cliente con id especificado.',
        );

      const dataUpdate = await this._context.client.update(where, payload);

      if (!dataUpdate) throw new BadRequestException('Algo Salió mal.');

      const response = { ...client, ...payload, id };

      return response;
    } catch (error) {
      throw new BadRequestException(error, 'Algo Salio mal.');
    }
  }

  async delete(id: number): Promise<ClientResponseDto> {
    try {
      const where = { id };

      const client = await this.findOne(id);

      if (!client)
        throw new NotFoundException(
          'No existe un cliente con id especificado.',
        );

      const dataUpdate = await this._context.client.update(where, { state: 0 });

      if (!dataUpdate) throw new BadRequestException('Algo Salió mal.');

      const response = { ...client, state: 0, id };

      return response;
    } catch (error) {
      throw new BadRequestException(error, 'Algo Salio mal.');
    }
  }
}
