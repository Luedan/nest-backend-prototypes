import { Injectable } from '@nestjs/common';
import { HttpModuleOptionsFactory, HttpModuleOptions } from '@nestjs/axios';

@Injectable()
export class HttpClientConfig implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    return {
      timeout: 5000,
      maxRedirects: 5,
      ...(process.env.BASE_URL ? { baseURL: process.env.BASE_URL } : {}),
    };
  }
}
