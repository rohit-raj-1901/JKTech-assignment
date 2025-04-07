import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { IngestionController } from './ingestion.controller';
import { IngestionService } from './ingestion.service';
import { IngestionStatus } from './ingestion.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([IngestionStatus]), // 👈 registers the repository
  ],
  controllers: [IngestionController],
  providers: [IngestionService],
})
export class IngestionModule {}
