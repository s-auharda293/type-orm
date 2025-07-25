import "reflect-metadata";
import { doTask } from "./repositories/repo";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
  console.log("Data Source has been initialized!");

  await doTask();
  console.log(
    "Metadata is saved, and the relation between metadata and photo is created in the database too"
  );
});
