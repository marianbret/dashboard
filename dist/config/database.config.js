"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_CONFIG = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'dashboard_db',
    entities: ['src/auth/auth.entity.ts'],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map