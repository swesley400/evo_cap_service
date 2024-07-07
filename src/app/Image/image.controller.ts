import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('/image')
export class ImageController {
  constructor(private imageService: ImageService) {}
  @Post('/capture')
  @UseInterceptors(FilesInterceptor('image'))
  async uploadFiles(@UploadedFiles() files: Array<any>, @Body() body: any) {
    try {
      const imagePath = await this.imageService.saveImageFile(files[0]);
      const image = this.imageService.typeToModel(JSON.parse(body.data));
      image.imgs_path = imagePath;

      const imageCreated = await this.imageService.save(image);
      console.log(imageCreated);

      const imageFullType = await this.imageService.modelToType(imageCreated);
      console.log(imageFullType);
      return imageFullType;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
