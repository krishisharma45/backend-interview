import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// leverages dotenv package to load variables from .env to process.env object
dotenv.config();

// converts port variable from string to integer for database connection
const port = parseInt(process.env.DATABASE_PORT) || 5432;

// imports task module and sets up database connection for entire app
@Module({
  imports: [TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOSTNAME,
      port: port,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
  })],
})

export class AppModule {}
