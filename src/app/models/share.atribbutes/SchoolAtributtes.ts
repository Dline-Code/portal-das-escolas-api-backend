import { Column, PrimaryColumn,BeforeInsert } from 'typeorm';
import DatesTableAtributtes from './DatesTableAtribbues';
import {uuid} from 'uuidv4'

abstract class SchoolAtribbutes extends DatesTableAtributtes {
  @PrimaryColumn({type:'varchar',})
  id: string;

  @Column({ type: 'varchar', nullable: false, default: 'usuário do portal das escolas' })
  nome: string;

  @Column({ type: 'varchar', nullable: false, default: 'masculino' })
  nif: string;

  @Column({ type: 'varchar', nullable: true })
  numero: string;

  @BeforeInsert()
  setId() {
    this.id= String(uuid())

  }

}

export default SchoolAtribbutes;
