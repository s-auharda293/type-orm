import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "./Photo.entity";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.author)
  photos: Photo[];

  @Column()
  signature: string;

  @Column()
  famous: boolean;

  @Column()
  rich: boolean;

  // Add any additional fields or relations as needed
}
