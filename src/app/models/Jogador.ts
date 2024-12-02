import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import Endereco from './Endereco';


@Entity('tb_jogador')
class Jogador {

    @PrimaryColumn('text')
    nickname: string;

    @Column('text')
    senha: string;

    @Column('int')
    pontos: number;

    //coluna opcional
    @Column('date', {nullable: true})
    data_ultimo_login: Date;
    
    //coluna opcional, caso nao seja informado data, vai recebere a data corrente.
    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_cadastro: Date;

    //associação (flecha)
    @ManyToOne(type => Endereco)
    @JoinColumn({name: "endereco_id", referencedColumnName: "id"})
    endereco: Endereco;  
}

export default Jogador;