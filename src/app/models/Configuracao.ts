import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_configuracao')
class Configuracao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    descricao: string;

    @Column('int')
    valor: number;

    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_criacao: string;
}
export default Configuracao;