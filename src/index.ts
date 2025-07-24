import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./entity/Photo";
import { doTask } from "./repositories/repo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sauharda",
  password: "1619",
  database: "typeormlearn",
  entities: [Photo, PhotoMetadata],
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
