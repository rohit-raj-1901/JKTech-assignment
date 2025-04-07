import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private docRepo: Repository<Document>,
  ) {}

  async create(createDto: CreateDocumentDto, file: Express.Multer.File) {
    const doc = this.docRepo.create({
      name: createDto.name,
      filePath: file.path,
    });
    return this.docRepo.save(doc);
  }

  findAll() {
    return this.docRepo.find();
  }

  findOne(id: number) {
    return this.docRepo.findOne({ where: { id } });
  }

  // async remove(id: number) {
  //   const doc = await this.findOne(id);
  //   return this.docRepo.remove(doc);
  // }
}
