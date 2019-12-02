import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DATABASE_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'dashboard_db',
    entities: ['src/auth/auth.entity.ts'],
    synchronize: true,
};