import { MigrationInterface, QueryRunner } from 'typeorm';

export class schoolWithUser1644279289210 implements MigrationInterface {
  name = 'schoolWithUser1644279289210';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "school" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL, "nome" character varying NOT NULL DEFAULT 'usuário do portal das escolas', "nif" character varying NOT NULL DEFAULT 'masculino', "numero" character varying, "donoId" uuid, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_b4e924d914cd24cb9d4783a37d9" FOREIGN KEY ("donoId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "school" DROP CONSTRAINT "FK_b4e924d914cd24cb9d4783a37d9"`
    );
    await queryRunner.query(`DROP TABLE "school"`);
  }
}
