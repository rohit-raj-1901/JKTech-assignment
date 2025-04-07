import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IngestionStatus } from './ingestion.entity';

@Injectable()
export class IngestionService {
  constructor(
    private readonly http: HttpService,
    @InjectRepository(IngestionStatus)
    private ingestionRepo: Repository<IngestionStatus>,
    //ivate ingestions = new Map<string, any>(),
  ) {}

  async trigger() {
    const status = this.ingestionRepo.create({ status: 'started' });
    await this.ingestionRepo.save(status);

    // Trigger your Python backend here
    await this.http.post('http://python-backend/ingest').toPromise();

    return { message: 'Ingestion triggered' };
  }

  findAll() {
    return this.ingestionRepo.find();
  }

  // getStatus(id: string) {
  //   return this.ingestions.get(id) ?? { message: 'Not found' };
  // }

  // listAll() {
  //   return Array.from(this.ingestions.values());
  // }
}
