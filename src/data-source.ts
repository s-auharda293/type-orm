import { PhotoMetadata } from "./entity/PhotoMetadata.entity";
import { Author } from "./entity/Author.entity";
import { Album } from "./entity/Album.entity";
import { DataSource } from "typeorm";
import { Photo } from "./entity/Photo.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sauharda",
  password: "1619",
  database: "typeormlearn",
  migrations: ["src/migrations/**/*.ts"],
  entities: [Photo, PhotoMetadata, Author, Album],
  synchronize: false,
  logging: false,
});
