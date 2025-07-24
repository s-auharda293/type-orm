import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./entity/Photo.entity";
import { doTask } from "./repositories/repo";
import { PhotoMetadata } from "./entity/PhotoMetadata.entity";
import { Author } from "./entity/Author.entity";
import { Album } from "./entity/Album.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sauharda",
  password: "1619",
  database: "typeormlearn",
  entities: [Photo, PhotoMetadata, Author, Album],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize().then(async () => {
  console.log("Data Source has been initialized!");

  await doTask();
  console.log(
    "Metadata is saved, and the relation between metadata and photo is created in the database too"
  );
});
