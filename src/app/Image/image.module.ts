import { Module } from '@nestjs/common';
import { imageProviders } from './providers/image.providers';
import { DatabaseModule } from '../database/database.module';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports: [DatabaseModule],
  providers: [...imageProviders, ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
