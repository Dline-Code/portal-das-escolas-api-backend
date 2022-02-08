import 'reflect-metadata';
import { Entity,ManyToOne,JoinColumn } from 'typeorm';
import SchoolAtribbutes from './share.atribbutes/SchoolAtributtes';
import User from './User'

@Entity('school')
class School extends SchoolAtribbutes {
      @ManyToOne(()=>User, donoId=>donoId,{eager:true,onDelete:'RESTRICT',onUpdate:'CASCADE'})
      @JoinColumn({name:'donoId'})
      donoId:string;
}
export default School;
