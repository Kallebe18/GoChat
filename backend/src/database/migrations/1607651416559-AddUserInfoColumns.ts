import { TableColumn, MigrationInterface, QueryRunner } from 'typeorm'

class AddUserInfoColumns1607651416559 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'age',
        type: 'int',
        isNullable: true
      }),
      new TableColumn({
        name: 'gender',
        type: 'char',
        isNullable: true
      }),
      new TableColumn({
        name: 'bio',
        type: 'varchar',
        isNullable: true
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'age')
    await queryRunner.dropColumn('users', 'gender')
    await queryRunner.dropColumn('users', 'bio')
  }
}

export default AddUserInfoColumns1607651416559
