// dto/ingestion-status.dto.ts
export class IngestionStatusDto {
    id: string;
    status: 'pending' | 'running' | 'completed' | 'failed';
    startedAt: Date;
    completedAt?: Date;
  }
  