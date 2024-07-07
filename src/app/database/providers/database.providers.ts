/* eslint-disable prettier/prettier */

import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '',
        port: 0,
        username: '',
        password: '',
        database: '',
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: false,
        connectTimeout: 10000000,
      });

      return dataSource.initialize();
    },
  },
];
