import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('tb_imgs')
export class Image {
  @PrimaryGeneratedColumn()
  imgs_code: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgs_name: string;

  @Column({ type: 'varchar', length: 4, nullable: false })
  imgs_exts: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  imgs_path: string;

  @Column({ type: 'int', nullable: true, comment: 'Size in Bytes' })
  imgs_size: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgs_dims: string;

  @Column({ type: 'int', nullable: true })
  imgs_dvcs: number;

  @Column({ type: 'int', nullable: false })
  imgs_with: number;

  @Column({ type: 'int', nullable: false })
  imgs_hegt: number;

  @Column({ type: 'int', nullable: true })
  imgs_resx: number;

  @Column({ type: 'int', nullable: true })
  imgs_resy: number;

  @Column({ type: 'int', nullable: true })
  imgs_itst: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgs_mnft: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgs_modl: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgs_srnb: string;

  @Column({ type: 'int', nullable: false })
  imgs_ptts: number;

  @Column({ type: 'int', nullable: true })
  imgs_exam: number;

  @Column({ type: 'int', nullable: true })
  imgs_emps: number;

  @Column({ type: 'int', nullable: true })
  imgs_apnt: number;

  @Column({ type: 'int', nullable: true })
  imgs_lgda: number;

  @Column({ type: 'int', nullable: true })
  imgs_satn: number;

  @Column({ type: 'int', nullable: true })
  imgs_shps: number;

  @Column({ type: 'int', nullable: true })
  imgs_ctrs: number;

  @Column({ type: 'int', nullable: true })
  imgs_brgs: number;

  @Column({ type: 'int', nullable: true })
  imgs_zoom: number;

  @Column({ type: 'int', nullable: true })
  imgs_whbl: number;

  @Column({ type: 'boolean', nullable: false, default: false })
  imgs_impt: boolean;

  @Column({ type: 'int', nullable: false })
  imgs_ucrt: number;

  @Column({ type: 'int', nullable: true })
  imgs_uchd: number;

  @Column({ type: 'int', nullable: true })
  imgs_udlt: number;

  @CreateDateColumn({ name: 'imgs_dhcr' })
  imgs_dhcr: Date;

  @UpdateDateColumn({ name: 'imgs_dhcg' })
  imgs_dhcg: Date;

  @DeleteDateColumn({ name: 'imgs_dhdl' })
  imgs_dhdl: Date;
}
