import { Controller, Get, Param, Post } from '@nestjs/common';
import { IngestionService } from './ingestion.service';

@Controller('ingestion')
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post('trigger')
  async triggerIngestion() {
    // Simulated ingestion process
    console.log('🚀 Ingestion process started...');

    // Optional: Add async behavior
    await new Promise((res) => setTimeout(res, 1000)); // simulates some delay

    return {
      message: '✅ Ingestion triggered successfully (mocked)',
      status: 'started',
      timestamp: new Date(),
    };
  }

  // @Get(':id')
  // getStatus(@Param('id') id: string) {
  //   return this.ingestionService.getStatus(id);
  // }

  // @Get()
  // listAll() {
  //   return this.ingestionService.listAll();
  // }
}
