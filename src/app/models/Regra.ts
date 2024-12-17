import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_regra')
class Regra {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 20 })
    descricao: string;

    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_criacao: string;
}
export default Regra;