import { MigrationInterface, QueryRunner } from 'typeorm';

export class school1644318663319 implements MigrationInterface {
  name = 'school1644318663319';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "school" DROP CONSTRAINT "FK_b4e924d914cd24cb9d4783a37d9"`
    );
    await queryRunner.query(
      `ALTER TABLE "school" DROP CONSTRAINT "PK_57836c3fe2f2c7734b20911755e"`
    );
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "school" ADD "id" character varying NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_b4e924d914cd24cb9d4783a37d9" FOREIGN KEY ("donoId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "school" DROP CONSTRAINT "FK_b4e924d914cd24cb9d4783a37d9"`
    );
    await queryRunner.query(
      `ALTER TABLE "school" DROP CONSTRAINT "PK_57836c3fe2f2c7734b20911755e"`
    );
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "school" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_b4e924d914cd24cb9d4783a37d9" FOREIGN KEY ("donoId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE`
    );
  }
}
