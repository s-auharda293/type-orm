import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "./Photo.entity";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  name: string;

  @OneToMany(() => Photo, (photo) => photo.author)
  photos: Photo[];

  // Add any additional fields or relations as needed
}
