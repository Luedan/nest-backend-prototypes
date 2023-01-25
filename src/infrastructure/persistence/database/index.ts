import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { entities } from './entities';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  providers: [
    {
      provide: 'IDatabase',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '123123',
          database: 'test',
          entities,
          synchronize: true,
        });

        return dataSource.initialize();
      },
    },
  ],
  exports: ['IDatabase'],
})
export class DatabaseModule {}
