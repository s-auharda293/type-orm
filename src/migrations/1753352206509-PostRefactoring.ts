import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1753352206509 implements MigrationInterface {
    name = 'PostRefactoring1753352206509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" ADD "rich" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "rich"`);
    }

}
