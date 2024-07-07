import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Image } from './entity/image.entity';
import * as fs from 'fs';
import * as path from 'path';
import * as ini from 'ini';

@Injectable()
export class ImageService {
  private readonly config: any;

  constructor(
    @Inject('IMAGE_REPOSITORY')
    private imageRepository: Repository<Image>,
  ) {
    const configPath = path.resolve(process.cwd(), 'capture.ini');
    const configContent = fs.readFileSync(configPath, 'utf-8');
    this.config = ini.parse(configContent);
  }

  async save(data: Image) {
    try {
      return await this.imageRepository.save(data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async saveImageFile(file: any): Promise<string> {
    const imagesPath = this.config.folders.imagesPath;

    if (!fs.existsSync(imagesPath)) {
      fs.mkdirSync(imagesPath, { recursive: true });
    }

    const filePath = path.join(imagesPath, file.originalname);

    fs.writeFileSync(filePath, file.buffer);

    return filePath;
  }

  public modelToType(model: Image): any {
    if (!model) return null;

    return {
      name: model.imgs_name,
      extension: model.imgs_exts,
      device: model.imgs_dvcs,
      path: model.imgs_path,
      size: model.imgs_size,
      dimensions: model.imgs_dims,
      width: model.imgs_with,
      height: model.imgs_hegt,
      resolutionX: model.imgs_resx,
      resolutionY: model.imgs_resy,
      intensity: model.imgs_itst,
      cameraManufacturer: model.imgs_mnft,
      cameraModel: model.imgs_modl,
      cameraSerialNumber: model.imgs_srnb,
      patient: { id: model.imgs_ptts },
      exam: { id: model.imgs_exam },
      examiner: { id: model.imgs_emps },
      appointment: model.imgs_apnt ? { id: model.imgs_apnt } : null,
      legend: model.imgs_lgda,
      saturation: model.imgs_satn,
      sharpness: model.imgs_shps,
      contrast: model.imgs_ctrs,
      brightness: model.imgs_brgs,
      zoom: model.imgs_zoom,
      whiteBalance: model.imgs_whbl,
      imported: model.imgs_impt,
      reportHasImages: null,
      userCreated: model.imgs_ucrt ? { id: model.imgs_ucrt } : null,
      userChanged: model.imgs_uchd ? { id: model.imgs_uchd } : null,
      userDeleted: model.imgs_udlt ? { id: model.imgs_udlt } : null,
      dateHourCreated: model.imgs_dhcr,
      dateHourChanged: model.imgs_dhcg,
      dateHourDeleted: model.imgs_dhdl,
    };
  }

  public typeToModel(inter: any): any {
    return {
      imgs_name: inter.name || null,
      imgs_exts: inter.extension || null,
      imgs_path: inter.path || null,
      imgs_size: inter.size || null,
      imgs_dims: inter.dimensions || null,
      imgs_dvcs: inter.device || null,
      imgs_with: inter.width || null,
      imgs_hegt: inter.height || null,
      imgs_resx: inter.resolutionX || null,
      imgs_resy: inter.resolutionY || null,
      imgs_itst: inter.intensity || null,
      imgs_mnft: inter.cameraManufacturer || null,
      imgs_modl: inter.cameraModel || null,
      imgs_srnb: inter.cameraSerialNumber || null,
      imgs_ptts: inter.patient ? inter.patient.id : null,
      imgs_exam: inter.exam ? inter.exam.id : null,
      imgs_emps: inter.examiner ? inter.examiner.id : null,
      imgs_apnt: inter.appointment ? inter.appointment.id : null,
      imgs_lgda: inter.legend ? inter.legend.id : null,
      imgs_satn: inter.saturation || null,
      imgs_shps: inter.sharpness || null,
      imgs_ctrs: inter.contrast || null,
      imgs_brgs: inter.brightness || null,
      imgs_zoom: inter.zoom || null,
      imgs_whbl: inter.whiteBalance || null,
      imgs_impt: inter.imported || false,
      imgs_ucrt: inter.userCreated ? inter.userCreated.id : null,
      imgs_uchd: inter.userChanged ? inter.userChanged.id : null,
      imgs_udlt: inter.userDeleted ? inter.userDeleted.id : null,
      imgs_dhcr: inter.dateHourCreated || new Date(),
      imgs_dhcg: inter.dateHourChanged || new Date(),
      imgs_dhdl: inter.dateHourDeleted || null,
    };
  }
}
