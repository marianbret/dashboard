import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from './config/database.config';
import { User } from './auth/auth.entity';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({...DATABASE_CONFIG,
    entities:[
      User
    ]}),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
