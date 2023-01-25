import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class ClientRequestDto {
  @AutoMap()
  @IsInt()
  @IsOptional()
  public id: number;

  @AutoMap()
  @IsString()
  public name: string;

  @AutoMap()
  @IsNumber()
  public state: number;
}

export class ClientUpdateRequestDto extends PartialType(ClientRequestDto) {}
