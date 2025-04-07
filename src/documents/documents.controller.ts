import {
 Controller, Post, Get, Delete, Param, UploadedFile, UseInterceptors, Body, NotFoundException, 
 Res} from '@nestjs/common';
import { Response } from 'express';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { DocumentsService } from './documents.service';
  import { CreateDocumentDto } from './dto/create-document.dto';
import { existsSync } from 'fs';
import { join } from 'path';
  
  @Controller('documents')
  export class DocumentsController {
    constructor(private docService: DocumentsService) {}
  
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
      }),
    }))
    upload(@UploadedFile() file: Express.Multer.File, @Body() body: CreateDocumentDto) {
      return this.docService.create(body, file);
    }
  
    @Get()
    findAll() {
      return this.docService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.docService.findOne(id);
    }
  
    // @Delete(':id')
    // remove(@Param('id') id: number) {
    //   return this.docService.remove(id);
    // }
    @Get('download/:filename')
    downloadFile(@Param('filename') filename: string, @Res() res: Response) {
      const filePath = join(process.cwd(), 'uploads', filename);
  
      if (!existsSync(filePath)) {
        throw new NotFoundException('File not found');
      }
  
      return res.download(filePath); // triggers file download in browser/Postman
    }
  }
  