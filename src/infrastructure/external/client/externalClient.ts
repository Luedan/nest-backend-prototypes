import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IExternalClient } from '../../../domain/interfaces/infrastructure/external/client/IExternalClient';
import { ClientResponseDto } from '../../../domain/client/dto/clientResponse.dto';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ExternalClient implements IExternalClient {
  constructor(private readonly _httpClient: HttpService) {}

  async httpGetAll(): Promise<ClientResponseDto[]> {
    const { data } = await firstValueFrom(
      this._httpClient
        .get<ClientResponseDto[]>('http://localhost:3000/client')
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    return data;
  }
}
