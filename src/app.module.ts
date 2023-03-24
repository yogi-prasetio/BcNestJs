import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hr-db',
      entities: ['dist/output/entities/*.js'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
})
export class AppModule {}
