import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1753352157489 implements MigrationInterface {
    name = 'PostRefactoring1753352157489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "author" ADD "signature" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "author" ADD "famous" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "famous"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "signature"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "name"`);
    }

}
